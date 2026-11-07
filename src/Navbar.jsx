import {useEffect, useRef, useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';

export default function Navbar({it, controls}) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  const links = [['home', 'Home', 'Home'], ['projects', 'Progetti', 'Work'], ['stack', 'Tecnologie', 'Toolkit'], ['about', 'Profilo', 'About'], ['contact', 'Parliamone', 'Let’s talk']];
  useEffect(() => {
    if (!open) return;
    const outside = event => { if (!header.current?.contains(event.target)) setOpen(false); };
    const escape = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const desktop = matchMedia('(min-width: 761px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);
  return <header className="site-header" ref={header} onBlur={event => {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}>
    <div className="nav-bar">
      <a href="#home" className="brand" onClick={() => setOpen(false)}><img src="/logo-sfondo.png" alt="MA"/><span>MARCO<br/>AMANTEA<span className="brand-dot">.</span></span></a>
      <nav id="site-navigation" className={`site-navigation ${open ? 'is-open' : ''}`} aria-label={it ? 'Menu principale' : 'Main menu'}>
        {links.map(([id, italian, english]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{it ? italian : english}{id === 'contact' && <ArrowUpRight size={16}/>}</a>)}
      </nav>
      <div className="nav-actions">{controls}<button ref={toggle} className="menu-toggle" aria-controls="site-navigation" aria-expanded={open} aria-label={open ? (it ? 'Chiudi menu' : 'Close menu') : (it ? 'Apri menu' : 'Open menu')} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
    </div>
  </header>;
}
