import { createElement as h, useMemo } from 'react';
import templateHtml from './template.html?raw';
import { LandingApp, type LandingProps } from './App';

const PROPS: LandingProps = { accent: '#008069', btnR: 999, cardR: 14 };

function parseTemplate(html: string): DocumentFragment {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content;
}

export default function Landing() {
  const tpl = useMemo(() => parseTemplate(templateHtml), []);
  LandingApp.tpl = tpl;
  return h(LandingApp, PROPS);
}
