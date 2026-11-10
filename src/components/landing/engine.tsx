import React, { createElement as h, Component } from 'react';

const camel = (s: string) => s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

function styleObj(str: string): React.CSSProperties {
  const o: Record<string, string> = {};
  String(str).split(';').forEach((d) => {
    const i = d.indexOf(':');
    if (i < 0) return;
    const k = d.slice(0, i).trim();
    const v = d.slice(i + 1).trim();
    if (!k) return;
    if (k.startsWith('--')) o[k] = v;
    else if (k.startsWith('-webkit-')) o['Webkit' + camel(k.slice(8)).replace(/^./, (c) => c.toUpperCase())] = v;
    else o[camel(k)] = v;
  });
  return o as React.CSSProperties;
}

function lookup(scope: Array<Record<string, unknown>>, path: string): unknown {
  path = path.trim();
  if (path === 'true') return true;
  if (path === 'false') return false;
  const parts = path.split('.');
  let v: unknown;
  for (let i = scope.length - 1; i >= 0; i--) {
    if (scope[i] && parts[0] in scope[i]) {
      v = scope[i][parts[0]];
      break;
    }
  }
  for (let j = 1; j < parts.length && v != null; j++) {
    v = (v as Record<string, unknown>)[parts[j]];
  }
  return v;
}

const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;

function value(raw: string, scope: Array<Record<string, unknown>>): unknown {
  const m = raw.match(/^\{\{\s*([^}]+?)\s*\}\}$/);
  if (m) return lookup(scope, m[1]);
  return raw.replace(HOLE, (_, p) => {
    const v = lookup(scope, p);
    return v == null ? '' : String(v);
  });
}

const ATTR: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  onclick: 'onClick',
  onchange: 'onChange',
  oninput: 'onInput',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
};

export function build(node: ChildNode, scope: Array<Record<string, unknown>>, key: React.Key): React.ReactNode {
  if (node.nodeType === 3) {
    const t = node.nodeValue ?? '';
    if (!t.trim() && t.includes('\n')) return null;
    return t.includes('{{') ? (value(t, scope) as React.ReactNode) : t;
  }
  if (node.nodeType !== 1) return null;
  const el = node as Element;
  const tag = el.localName;
  const kids = (n: Element) => {
    const out: React.ReactNode[] = [];
    n.childNodes.forEach((c, i) => {
      const r = build(c, scope, i);
      if (r !== null && r !== undefined && r !== '') out.push(r);
    });
    return out;
  };

  if (tag === 'sc-for') {
    const list = (value(el.getAttribute('list') || '', scope) as unknown[]) || [];
    const as = el.getAttribute('as') || 'item';
    return h(
      React.Fragment,
      { key },
      list.map((it, i) =>
        h(
          React.Fragment,
          { key: i },
          Array.from(el.childNodes)
            .map((c, j) => build(c, scope.concat([{ [as]: it }]), j))
            .filter((x) => x !== null && x !== ''),
        ),
      ),
    );
  }

  if (tag === 'sc-if') {
    return value(el.getAttribute('value') || '', scope) ? h(React.Fragment, { key }, kids(el)) : null;
  }

  const props: Record<string, unknown> = { key };
  for (const a of Array.from(el.attributes)) {
    const n = a.name;
    if (n.startsWith('hint-')) continue;
    let v: unknown = a.value.includes('{{') ? value(a.value, scope) : a.value;
    if (n === 'style') {
      props.style = styleObj(String(v));
      continue;
    }
    if (n === 'ref') {
      props.ref = v;
      continue;
    }
    let pn = ATTR[n] || n;
    if (pn.includes('-') && !pn.startsWith('aria-') && !pn.startsWith('data-')) pn = camel(pn);
    props[pn] = v;
  }
  return h(tag, props, ...kids(el));
}

export type RenderVals = Record<string, unknown>;

export abstract class DCLogic<P = object, S = object> extends Component<P, S> {
  static tpl: DocumentFragment;
  abstract renderVals(): RenderVals;
  render() {
    const t = (this.constructor as typeof DCLogic).tpl;
    const v = this.renderVals();
    return h(
      React.Fragment,
      null,
      Array.from(t.childNodes).map((c, i) => build(c, [v], i)),
    );
  }
}
