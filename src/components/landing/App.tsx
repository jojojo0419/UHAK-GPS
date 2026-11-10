// @ts-nocheck — ported from design-tool export; keep runtime parity with legacy HTML
import { DCLogic } from './engine';

export type LandingProps = {
  accent?: string;
  btnR?: number;
  cardR?: number;
};

type LandingState = {
  flipped: Record<number, boolean>;
  wants: Record<string, unknown>;
  step: number;
  asked: string;
  collapsed: boolean;
  activeNav: string;
  barClosed: boolean;
  idFlip: boolean;
  schoolTab: number;
  tagSel?: Record<string, boolean>;
  picks?: Record<number, boolean>;
};

export class LandingApp extends DCLogic<LandingProps, LandingState> {
  constructor(p){ super(p); this.state = { flipped: {}, wants: {}, step: 0, asked: '', collapsed: false, activeNav: '', barClosed: false, idFlip: false, schoolTab: 0 };
    this.onScroll = (e) => { const t = e && e.target; if (t && t.nodeType === 1 && t !== document.documentElement && t !== document.body && (t.scrollHeight - t.clientHeight) < 4) return; const y = (!t || t === document || t === document.documentElement || t === document.body) ? (window.scrollY || document.documentElement.scrollTop || 0) : (t.scrollTop || 0);
      const c = this.state.collapsed; if (!c && y > 90) this.setState({ collapsed: true }); else if (c && y < 30) this.setState({ collapsed: false });
      let act = ''; ['options', 'how', 'about'].forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) act = id; });
      if (act !== this.state.activeNav) this.setState({ activeNav: act }); }; }
  componentDidMount(){ document.addEventListener('scroll', this.onScroll, true); }
  componentWillUnmount(){ document.removeEventListener('scroll', this.onScroll, true); }
  renderVals() {
    const accent = this.props.accent ?? '#008069';
    const btnR = this.props.btnR ?? 999;
    const cardR = this.props.cardR ?? 14;
    const st = this.state;
    const T = [
      { img: '', alt: 'A classroom desk with an open textbook', thought: '“Week six. No dictionary app in class.”', ja: '6週目、辞書アプリなしで授業へ。', reply: '[Name], 27 · English school · Melbourne. We helped her switch to afternoon classes so she could work mornings.' },
      { img: '', alt: 'An apron hanging in a café back room', thought: '“Café shift, then the beach. A good kind of tired.”', ja: '朝はカフェ、午後は海へ。', reply: '[Name], 28 · Working Holiday · Sydney. We redid her CV the Australian way. Week three, she was on the roster.' },
      { img: '', alt: 'Fruit crates at a weekend market stall', thought: '“Helped at a friend’s market stall. Sold out by noon.”', ja: '週末マーケットでお手伝い。', reply: '[Name], 26 · Working Holiday · Brisbane. We planned a real weekly budget before she arrived.' },
      { img: '', alt: 'A share-house kitchen table set for dinner', thought: '“Share-house dinner. Everyone cooks one dish from home.”', ja: 'シェアハウスで持ち寄りごはん。', reply: '[Name], 27 · English school · Sydney. We viewed the house and read the lease together first.' },
      { img: '', alt: 'Notes and a laptop on a library desk', thought: '“Tuesday nights at the library, studying for my certificate.”', ja: '火曜の夜は図書館で勉強。', reply: '[Name], 29 · Business course · Sydney. We mapped the pathway honestly, with no false promises.' }
    ];
    const thoughts = T.map((t, i) => { const f = !!st.flipped[i]; return { ...t, fig: 'margin: 0; flex: 0 0 max(172.8px, calc((100% - 60.5px) / 3.5)); scroll-snap-align: start; display: flex; flex-direction: column; transform: rotate(' + [-1.5, 1.2, -1, 2, -1.2][i % 5] + 'deg)', flipped: f, unflipped: !f, pressed: f ? 'true' : 'false', toggle: () => this.setState({ flipped: { ...st.flipped, [i]: !f } }) }; });
    const TAGS = [
      { id: 'scene', label: 'Change of scene', c: [1, 2], dot: '#008069' },
      { id: 'english', label: 'English boost', c: [2], dot: '#25D366' },
      { id: 'career', label: 'Global career', c: [3], dot: '#7FA6CF' },
      { id: 'long', label: 'Long-term stay', c: [4], dot: '#C9CED3' }
    ];
    const tagOn = st.tagSel || {}; const picks = st.picks || {};
    const lit = {}; TAGS.forEach(t => { if (tagOn[t.id]) t.c.forEach(n => { lit[n] = true; }); });
    const anyTag = Object.keys(lit).length > 0;
    const tags = TAGS.map(t => { const on = !!tagOn[t.id]; return { label: t.label, pressed: on ? 'true' : 'false', dot: 'display: none',
      style: 'font: inherit; font-size: 12px; font-weight: 500; cursor: pointer; min-height: 36px; padding: 6px 14px; border-radius: 999px; border: 1px solid ' + (on ? '#008069' : 'rgba(44,50,53,.15)') + '; background: ' + (on ? '#FFFFFF' : 'rgba(255,255,255,.6)') + '; color: ' + (on ? '#008069' : '#1C1E21'),
      toggle: () => this.setState({ tagSel: { ...tagOn, [t.id]: !on } }) }; });
    const CARDS = [
      { n: 1, kicker: 'Flexible', bg: '#008069', fg: '#FFFFFF', pat: 'repeating-linear-gradient(135deg, rgba(255,255,255,.07) 0 2px, transparent 2px 14px)', tilt: -1.2, title: 'Working Holiday', line: 'Live, work, and explore at your own pace.', badges: ['Work & Travel', 'Flexibility'] },
      { n: 2, kicker: 'Gentle start', bg: '#F6E3A8', fg: '#1C1E21', pat: 'radial-gradient(rgba(44,50,53,.12) 1.2px, transparent 1.6px) 0 0/14px 14px', tilt: 0.8, title: 'Language & Experience', line: 'Build confidence first, then take on real job challenges.', badges: ['Language First', 'Soft Landing'] },
      { n: 3, kicker: 'Career', bg: '#DCE9F4', fg: '#1C1E21', pat: 'linear-gradient(rgba(0,128,105,.08) 1px, transparent 1px) 0 0/100% 18px, linear-gradient(90deg, rgba(0,128,105,.08) 1px, transparent 1px) 0 0/18px 100%', tilt: -0.5, title: 'Specialised Degree / VET', line: 'Gain recognized qualifications and career-ready skills.', badges: ['Student Visa', 'Career Upgrade'] },
      { n: 4, kicker: 'Long term', bg: '#FFFFFF', fg: '#1C1E21', pat: 'repeating-radial-gradient(circle at 100% 100%, rgba(0,128,105,.07) 0 1px, transparent 1px 16px)', tilt: 1.1, title: 'Long-term Settlement', line: 'Strategic pathways for a longer stay and future residency.', badges: ['PR Pathway', 'Strategic Planning'] }
    ];
    const cards = CARDS.map(c => { const on = !!picks[c.n]; const hint = anyTag && lit[c.n]; const dim = anyTag && !lit[c.n];
      return { title: c.title, line: c.line, kicker: c.kicker, badges: c.badges.map(t => ({ t })), pressed: on ? 'true' : 'false',
        kickerStyle: 'font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: ' + (hint || on ? '#008069' : 'rgba(44,50,53,.5)'),
        markStyle: 'display: inline-flex; width: 26px; height: 26px; border-radius: 50%; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; transition: all .25s ease; background: ' + (on ? '#1C1E21' : 'transparent') + '; color: ' + (on ? '#FFFFFF' : 'transparent') + '; box-shadow: inset 0 0 0 1.5px ' + (on ? '#1C1E21' : 'rgba(44,50,53,.25)'),
        style: 'font: inherit; color: #1C1E21; text-align: left; cursor: pointer; width: 100%; border: none; border-top: 1px solid #E2E5E8; display: grid; grid-template-columns: 26px minmax(0, 1.1fr) minmax(0, 1fr); align-items: center; gap: 20px; padding: 22px 14px; transition: background .25s ease, opacity .25s ease, padding .25s ease; background: ' + (on ? '#FFFFFF' : 'transparent') + '; box-shadow: ' + (on ? 'inset 0 0 0 1.5px #1C1E21, 0 6px 18px rgba(20,32,46,.06)' : 'none') + '; border-radius: ' + (on ? '12px' : '0') + '; opacity: ' + (dim && !on ? 0.45 : 1),
        toggle: () => this.setState({ picks: { ...picks, [c.n]: !on } }) }; });
    const picked = CARDS.filter(c => picks[c.n]).map(c => ({ t: c.title }));
    const scroll = (d) => { const el = this.trackEl; if (el) el.scrollBy({ left: d * el.clientWidth * 0.6, behavior: 'smooth' }); };
    const S = [
      { title: 'Talk', ja: 'まず、話す', body: 'Start with one sentence: “I think I want to go overseas.” That’s enough.', detail: 'A free 30-minute chat. No school, visa or decision needed. You can even leave your job out of it.', note: '' },
      { title: 'Discover', ja: '本当の気持ちを知る', body: 'Together, we work out what you’re really looking for.', detail: 'A new environment, English, a career shift, confidence, or something you haven’t put into words yet.', note: '' },
      { title: 'Plan', ja: 'かたちにする', body: 'We turn it into something concrete.', detail: 'The right option and visa, a school that fits, timing, budget, and which city suits the life you want.', note: '' },
      { title: 'Do', ja: '準備する', body: 'Applications and getting ready to leave.', detail: 'School enrolment, visa application and departure preparation, one step at a time.', note: '' },
      { title: 'Move', ja: '現地で暮らす', body: 'Help once you’ve landed, from someone who lives here.', detail: 'Accommodation, work, school life, transport, and the questions that only come up locally.', note: 'Some in-person support may carry an extra fee. We’ll always tell you upfront.' },
      { title: 'Next', ja: 'その先を考える', body: 'Thinking about what comes after, together.', detail: 'Your career, and whether a longer stay in Australia makes sense. Honest about what’s possible; no guarantees we can’t keep.', note: '' }
    ];
    const ICONS = ['/images/step-1.webp', '/images/step-2.webp', '/images/step-3.webp', '/images/step-4.webp', '/images/step-5.webp', '/images/step-6.webp'];
    const go = (i) => this.setState({ step: Math.max(0, Math.min(S.length - 1, i)) });
    const steps = S.map((s, i) => { const sel = st.step === i; const done = i < st.step;
      const bc = sel ? '#008069' : 'rgba(44,50,53,0.22)';
      return { title: s.title, ja: s.ja, place: ['Tokyo', 'Tokyo', 'Tokyo ⇄ Sydney', 'Tokyo', 'Sydney', 'Australia'][i], num: '0' + (i + 1), sel: sel ? 'true' : 'false', active: sel, bc, icon: ICONS[i],
        iconStyle: 'width: 52px; height: 52px; display: block; align-self: center; transition: filter .3s ease, transform .3s ease; filter: ' + (sel ? 'drop-shadow(0 6px 10px rgba(0,0,0,.25)) saturate(1.15)' : (done ? 'none' : 'grayscale(1) opacity(0.45)')) + '; transform: scale(' + (sel ? 1.1 : 1) + ')',
        style: 'position: relative; width: 100%; box-sizing: border-box; font: inherit; color: #1C1E21; text-align: center; cursor: pointer; border-radius: 14px; padding: 16px 8px 14px; display: flex; flex-direction: column; align-items: center; gap: 6px; transition: background-color .25s ease, box-shadow .25s ease, transform .25s ease; border: 1.5px solid ' + (sel ? '#1C1E21' : 'rgba(28,30,33,0.10)') + '; background-color: ' + (sel ? '#FFFFFF' : 'rgba(255,255,255,0.5)') + '; box-shadow: ' + (sel ? '-4px 4px 0 #1C1E21' : 'none') + '; transform: ' + (sel ? 'translate(2px,-2px)' : 'none'),
        pick: () => go(i) }; });
    const c = S[st.step];
    const last = st.step === S.length - 1;
    const cur = { ...c, num: '0' + (st.step + 1), hasNote: !!c.note, icon: ICONS[st.step], hasPrev: st.step > 0, hasNext: !last, isLast: last,
      nextTitle: last ? '' : S[st.step + 1].title, prev: () => go(st.step - 1), next: () => go(st.step + 1) };
    const SCH = [
      { label: 'English schools', items: [
        { kicker: 'English school · Sydney CBD', name: '[School name]', tags: ['8 min walk from Central', '~15% Japanese', 'Busy, social'], fit: 'you want lots of classmates and a big timetable.', notfit: 'you would rather have small, quiet classes.' },
        { kicker: 'English school · Melbourne', name: '[School name]', tags: ['20 min tram from Brunswick', '~5% Japanese', 'Small classes'], fit: 'you want to speak English at lunch, too.', notfit: 'you want a big Japanese community nearby.' },
        { kicker: 'English school · Brisbane', name: '[School name]', tags: ['15 min bus from West End', '~10% Japanese', 'Relaxed'], fit: 'you want a gentle first few months.', notfit: 'you are after big-city energy.' } ] },
      { label: 'Vocational colleges', items: [
        { kicker: 'Hospitality · Sydney', name: '[College name]', tags: ['25 min by train', 'Hands-on kitchens', 'Mixed ages'], fit: 'you want a skill you can work with.', notfit: 'you prefer classroom-only study.' },
        { kicker: 'Business · Melbourne', name: '[College name]', tags: ['City campus', 'Evening classes', 'Work-friendly'], fit: 'you want to study and work at the same time.', notfit: 'you want full-time daytime classes.' },
        { kicker: 'Design · Sydney', name: '[College name]', tags: ['Studio-based', 'Portfolio projects', 'Small cohorts'], fit: 'you learn best by making things.', notfit: 'you want a fast, theory-heavy course.' } ] },
      { label: 'Universities', items: [
        { kicker: 'University · Sydney', name: '[University name]', tags: ['Big campus', 'Foundation pathway', 'Academic'], fit: 'you are thinking a few years ahead.', notfit: 'you only want a year abroad.' },
        { kicker: 'University · Brisbane', name: '[University name]', tags: ['Riverside campus', 'Strong support', 'Calmer pace'], fit: 'you want a supportive first step into uni.', notfit: 'you want the biggest-name school.' },
        { kicker: 'University · Melbourne', name: '[University name]', tags: ['Inner-city', 'Industry links', 'Competitive'], fit: 'you have a clear career goal.', notfit: 'you are still exploring what you want.' } ] }
    ];
    const schoolTabs = SCH.map((g, i) => { const sel = st.schoolTab === i; return { label: g.label, sel: sel ? 'true' : 'false',
      style: 'font: inherit; font-size: 12px; font-weight: 500; letter-spacing: 0.03em; cursor: pointer; min-height: 44px; padding: 7.2px 13px; border-radius: 719.3px; border: 1.5px solid #008069; background: ' + (sel ? '#008069' : 'transparent') + '; color: ' + (sel ? '#FFFFFF' : '#008069'),
      pick: () => this.setState({ schoolTab: i }) }; });
    const schools = SCH[st.schoolTab].items.map(c => ({ ...c, tags: c.tags.map(t => ({ t })) }));
    const AQ = ['Am I too old at 27?', 'Working Holiday or student visa?', 'How much would I need?', 'How do I tell my parents?'];
    const asks = AQ.map(q => { const on = st.asked === q; return { label: q, pressed: on ? 'true' : 'false',
      style: "font-family: 'Plus Jakarta Sans', 'Zen Kaku Gothic New', sans-serif; font-size: 12px; letter-spacing: 0.03em; color: " + (on ? '#008069' : '#FFFFFF') + "; background: " + (on ? '#FFFFFF' : 'transparent') + "; border: 1px solid rgba(255,255,255,0.6); border-radius: 719.3px; padding: 2.9px 7.9px; cursor: pointer; min-height: 20.2px",
      ask: () => this.setState({ asked: on ? '' : q }) }; });
        const col = st.collapsed;
    const hdrStyle = 'position: sticky; top: ' + (col ? '14px' : '0') + '; z-index: 100; animation: hdrIn .6s cubic-bezier(.3,.7,.2,1) both; transition: background .35s ease, top .35s ease; background: ' + (col ? 'transparent; pointer-events: none' : '#FCF5EB');
    const topStyle = 'display: flex; align-items: center; gap: 11.5px; overflow: hidden; transition: max-height .4s ease, opacity .3s ease, padding .4s ease; ' + (col ? 'max-height: 0; opacity: 0; padding: 0' : 'max-height: 86.4px; opacity: 1; padding: 15.8px 0 2.9px');
    const navOn = (k) => (st.activeNav === k ? 'on' : '');
    return { accent, btnR, cardR, collapsed: col, hdrMode: col ? 'float' : 'atop', nav: { options: navOn('options'), how: navOn('how'), about: navOn('about'), life: '' }, hdrStyle, topStyle, thoughts, tags, cards, picked, anyPicks: picked.length > 0, noPicks: picked.length === 0, setTrack: (el) => { this.trackEl = el; }, prev: () => scroll(-1), next: () => scroll(1), steps, cur, asks,
      asked: st.asked, hasAsked: !!st.asked, noAsked: !st.asked, clearAsk: () => this.setState({ asked: '' }),
      idFront: !st.idFlip, idBack: st.idFlip, idInner: 'display: grid; transform-style: preserve-3d; transition: transform .7s cubic-bezier(.3,.7,.2,1); transform: rotateY(' + (st.idFlip ? 180 : 0) + 'deg)', idPressed: st.idFlip ? 'true' : 'false', flipId: () => this.setState({ idFlip: !st.idFlip }),
      stopBubble: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=205%2F250+Pitt+St%2C+Sydney+NSW+2000',
      schoolTabs, schools,
      showBar: !st.barClosed, closeBar: () => this.setState({ barClosed: true }),
      barLabel: st.asked ? 'Good question. Bring it to your chat.' : 'Been wondering…' };
  }
}
