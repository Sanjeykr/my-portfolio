import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  EDIT YOUR CONTENT HERE
// ─────────────────────────────────────────────────────────────

const ME = {
  name: "Sanjey Krishna Rajkumar",
  title: "Data Analytics & AI Integration",
  tagline: "Information Systems graduate specialising in Big Data. I build AI-driven apps, interactive dashboards, and turn complex data into clear decisions.",
  email: "sanjeyraj2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjey-rajkumar",
  phone: "0424 082 003",
  location: "Sydney, NSW",
};

// ── CODI AI IMAGES ──────────────────────────────────────────
const CODI_IMAGES = [
  { src: "/Chat Interface.png", caption: "Chat Interface" },
  { src: "/Data Connection Page .png", caption: "Data Connection Page" },
  { src: "/Features .png", caption: "Features" },
  { src: "/Home Page.png", caption: "Home Page" },
  { src: "/Landing Page.png", caption: "Landing Page" },
  { src: "/Login Page .png", caption: "Login Page" },
  { src: "/Methodology .png", caption: "Methodology" },
  { src: "/Results Page.png", caption: "Results Page" },
  { src: "/Signup Page.png", caption: "Signup Page" },
];

const PROJECTS = [
  {
    title: "CODI AI",
    tag: "Marketing Intelligence",
    desc: "AI-powered platform analysing 12+ months of Google Analytics data for SMEs. Integrated OpenAI API so users can ask plain-English questions and get instant insights.",
    tech: ["OpenAI API", "React", "Python", "PostgreSQL"],
    highlight: "35% lift in campaign effectiveness",
    images: CODI_IMAGES,
  },
  {
    title: "SafeSpace Collective",
    tag: "Community Safety",
    desc: "A platform tackling harassment faced by 83% of women aged 18–24. Features real-time safety mapping, walking group coordination, and institutional feedback systems.",
    tech: ["React", "Google Maps API", "Node.js", "MongoDB"],
    highlight: "Selected for investor presentation",
  },
  {
    title: "Athlete Pro",
    tag: "Sports Management",
    desc: "Web platform for coaches, athletes, and clubs with centralised performance tracking. Role-based dashboards, health monitoring, nutrition planning and injury prevention.",
    tech: ["React", "MySQL", "Python", "Chart.js"],
    highlight: "3 user roles · full analytics suite",
  },
];

const EXPERIENCE = [
  {
    role: "Intern Data Analyst",
    company: "Techants Solutions",
    period: "Aug 2023 – Mar 2024",
    points: [
      "Cleaned 50+ datasets (100K+ records) — accuracy from 74% to 94%",
      "Built 15+ dashboards, reducing report time by 60%",
      "Pre-processed 30+ datasets weekly, cutting prep time by 45%",
    ],
  },
  {
    role: "Partnerships Team Member",
    company: "WSU FSAE · Freelance",
    period: "Jul – Sep 2024",
    points: [
      "Secured and managed sponsorship deals with full analytics reporting",
      "Collaborated on marketing campaigns and partner communications",
    ],
  },
  {
    role: "E-Karting Team Member",
    company: "Entertainment Park, Bankstown",
    period: "Sep 2024 – Present",
    points: [
      "Supervised 50+ races weekly with 100% safety compliance",
      "95% customer satisfaction across 15+ daily inquiries",
    ],
  },
  {
    role: "Paintball Marshall & Supervisor",
    company: "Delta Force Paintball",
    period: "Feb 2022 – Feb 2025",
    points: [
      "Led teams of 8–10 staff — 95% operational efficiency",
      "Trained 15+ new employees, cut onboarding from 3 weeks to 2",
    ],
  },
];

// Education + Certifications combined
const EDUCATION = [
  {
    degree: "Bachelor of Information Systems",
    school: "Western Sydney University · Data Science",
    period: "2022 – 2025",
    badge: "completed",
  },
  {
    degree: "Master's Degree",
    school: "Data Science / Cybersecurity — still deciding",
    period: "Planned · Future",
    badge: "upcoming",
  },
];

const CERTIFICATIONS = [
  { name: "Power BI Data Analyst Associate", issuer: "Microsoft" },
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services" },
  { name: "CompTIA Security+", issuer: "CompTIA" },
];

// ─────────────────────────────────────────────────────────────
//  MATRIX CANVAS
// ─────────────────────────────────────────────────────────────

function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 13;
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(13,13,13,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cols = Math.floor(canvas.width / fontSize);
      if (drops.length !== cols) drops = Array(cols).fill(1);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        // mix blue and green for data + security feel
        const useBlue = Math.random() > 0.6;
        ctx.fillStyle = useBlue ? "rgba(79,158,255,0.7)" : "rgba(0,255,100,0.5)";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.35,
        pointerEvents: "none",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION WRAPPER
// ─────────────────────────────────────────────────────────────

function Section({ id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        padding: "5rem 0",
        borderTop: "1px solid #252525",
      }}
    >
      {children}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [navBg, setNavBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const fn = () => setNavBg(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const NAV = ["about", "projects", "experience", "education", "contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0d0d0d; color: #d4d4d4; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

        .container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }

        /* NAV */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 1.5rem; height: 56px;
          display: flex; align-items: center; justify-content: space-between;
          background: ${navBg ? "rgba(13,13,13,0.92)" : "transparent"};
          backdrop-filter: ${navBg ? "blur(16px)" : "none"};
          border-bottom: 1px solid ${navBg ? "#222" : "transparent"};
          transition: background 0.3s, border-color 0.3s;
        }
        .nav-name { font-size: 0.95rem; font-weight: 600; color: #fff; cursor: pointer; }
        .nav-links { display: flex; gap: 0.25rem; list-style: none; }
        .nav-links button { background: none; border: none; font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #999; padding: 6px 10px; cursor: pointer; border-radius: 6px; transition: color 0.2s, background 0.2s; text-transform: capitalize; }
        .nav-links button:hover { color: #fff; background: #1a1a1a; }
        .hamburger { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; }
        .hamburger span { display: block; width: 18px; height: 1.5px; background: #d4d4d4; }

        /* MOBILE MENU */
        .mob { display: none; position: fixed; inset: 0; top: 56px; z-index: 99; background: rgba(13,13,13,0.97); flex-direction: column; align-items: center; justify-content: center; gap: 1rem; }
        .mob.open { display: flex; }
        .mob button { background: none; border: none; font-family: 'Inter', sans-serif; font-size: 1.3rem; font-weight: 500; color: #d4d4d4; cursor: pointer; padding: 0.5rem; transition: color 0.2s; text-transform: capitalize; }
        .mob button:hover { color: #4f9eff; }

        /* HERO */
        .hero-wrap { position: relative; min-height: 100vh; overflow: hidden; background: #0d0d0d; }
        .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 56px; position: relative; z-index: 1; }
        .hero-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 200px; background: linear-gradient(transparent, #0d0d0d); z-index: 2; pointer-events: none; }
        .hero-label { font-size: 0.75rem; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #4f9eff; margin-bottom: 1.5rem; }
        .hero-name { font-size: clamp(2.4rem, 6vw, 5rem); font-weight: 700; letter-spacing: -1.5px; line-height: 1.05; color: #ffffff; margin-bottom: 1rem; }
        .hero-title { font-size: clamp(1rem, 2.5vw, 1.3rem); font-weight: 400; color: #aaa; margin-bottom: 1.5rem; }
        .hero-desc { font-size: 1rem; font-weight: 300; color: #999; line-height: 1.8; max-width: 520px; margin-bottom: 2.5rem; }
        .hero-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 4rem; }
        .hero-stats { display: flex; gap: 3rem; padding-top: 2.5rem; border-top: 1px solid #252525; flex-wrap: wrap; }
        .stat-n { font-size: 1.8rem; font-weight: 700; color: #fff; letter-spacing: -1px; }
        .stat-l { font-size: 0.78rem; color: #666; margin-top: 0.2rem; }

        /* BUTTONS */
        .btn { font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 500; padding: 11px 24px; border-radius: 8px; cursor: pointer; transition: all 0.2s; border: none; }
        .btn-primary { background: #4f9eff; color: #fff; }
        .btn-primary:hover { background: #3a8aee; }
        .btn-secondary { background: #1a1a1a; color: #d4d4d4; border: 1px solid #2e2e2e; }
        .btn-secondary:hover { background: #222; border-color: #444; }

        /* SECTION HEADER */
        .sec-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #4f9eff; margin-bottom: 0.5rem; display: block; }
        .sec-title { font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 700; letter-spacing: -0.5px; color: #ffffff; margin-bottom: 2.5rem; }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: start; }
        .about-text p { font-size: 0.975rem; font-weight: 300; line-height: 1.85; color: #aaa; margin-bottom: 1.1rem; }
        .about-text p strong { color: #e8e8e8; font-weight: 600; }
        .info-card { background: #131313; border: 1px solid #252525; border-radius: 12px; overflow: hidden; }
        .info-row { display: flex; justify-content: space-between; align-items: center; padding: 0.9rem 1.25rem; border-bottom: 1px solid #1e1e1e; font-size: 0.85rem; }
        .info-row:last-child { border-bottom: none; }
        .info-k { color: #666; }
        .info-v { color: #e0e0e0; font-weight: 500; text-align: right; }

        /* PROJECTS */
        .projects-list { display: grid; gap: 1px; background: #222; border-radius: 12px; overflow: hidden; }
        .project-item { background: #111; padding: 2rem; transition: background 0.2s; }
        .project-item:hover { background: #151515; }
        .proj-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
        .proj-title { font-size: 1.15rem; font-weight: 600; color: #fff; }
        .proj-tag { font-size: 0.72rem; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #4f9eff; background: rgba(79,158,255,0.08); border: 1px solid rgba(79,158,255,0.18); padding: 3px 10px; border-radius: 4px; white-space: nowrap; }
        .proj-desc { font-size: 0.9rem; font-weight: 300; line-height: 1.75; color: #aaa; margin-bottom: 1rem; }
        .proj-highlight { font-size: 0.8rem; font-weight: 500; color: #34d399; margin-bottom: 1rem; }
        .proj-highlight::before { content: '↗  '; }
        .proj-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tech-pill { font-size: 0.77rem; padding: 4px 11px; background: #1a1a1a; border: 1px solid #2e2e2e; border-radius: 20px; color: #999; }

        /* EXPERIENCE */
        .exp-list { display: grid; gap: 1px; background: #222; border-radius: 12px; overflow: hidden; }
        .exp-item { background: #111; padding: 2rem; display: grid; grid-template-columns: 180px 1fr; gap: 2rem; transition: background 0.2s; }
        .exp-item:hover { background: #151515; }
        .exp-co { font-size: 0.85rem; font-weight: 500; color: #e0e0e0; margin-bottom: 0.2rem; }
        .exp-period { font-size: 0.77rem; color: #666; }
        .exp-role { font-size: 0.975rem; font-weight: 600; color: #fff; margin-bottom: 0.75rem; }
        .exp-pts { list-style: none; }
        .exp-pts li { font-size: 0.875rem; font-weight: 300; color: #aaa; line-height: 1.7; padding: 3px 0 3px 1rem; position: relative; }
        .exp-pts li::before { content: '–'; position: absolute; left: 0; color: #4f9eff; }

        /* EDUCATION & CERTIFICATIONS */
        .edu-cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; }
        .edu-list { display: grid; gap: 1px; background: #222; border-radius: 12px; overflow: hidden; }
        .edu-item { background: #111; padding: 1.5rem; display: flex; gap: 1rem; transition: background 0.2s; }
        .edu-item:hover { background: #151515; }
        .edu-dot { width: 9px; height: 9px; border-radius: 50%; background: #4f9eff; margin-top: 5px; flex-shrink: 0; }
        .edu-degree { font-size: 0.9rem; font-weight: 600; color: #e0e0e0; margin-bottom: 0.2rem; }
        .edu-school { font-size: 0.82rem; color: #777; margin-bottom: 0.2rem; }
        .edu-period { font-size: 0.75rem; color: #555; }
        .edu-badge { display: inline-block; font-size: 0.67rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; margin-top: 0.4rem; }
        .badge-done { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
        .badge-future { background: rgba(79,158,255,0.1); color: #4f9eff; border: 1px solid rgba(79,158,255,0.2); }

        .cert-list { display: grid; gap: 1px; background: #222; border-radius: 12px; overflow: hidden; }
        .cert-item { background: #111; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; transition: background 0.2s; }
        .cert-item:hover { background: #151515; }
        .cert-name { font-size: 0.875rem; font-weight: 600; color: #e0e0e0; margin-bottom: 0.25rem; }
        .cert-issuer { font-size: 0.78rem; color: #666; }
        .cert-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 0.7rem; font-weight: 600; padding: 4px 10px; border-radius: 20px; background: rgba(245,158,11,0.08); color: #f59e0b; border: 1px solid rgba(245,158,11,0.2); white-space: nowrap; flex-shrink: 0; }
        .cert-badge::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: #f59e0b; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .subsec-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #555; margin-bottom: 1rem; display: block; }

        /* CONTACT */
        .contact-links { display: grid; gap: 0.75rem; }
        .contact-link { display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem; background: #111; border: 1px solid #252525; border-radius: 12px; text-decoration: none; color: #d4d4d4; transition: background 0.2s, border-color 0.2s; }
        .contact-link:hover { background: #151515; border-color: #333; }
        .contact-icon { font-size: 1.1rem; width: 36px; height: 36px; background: #1a1a1a; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-lbl { font-size: 0.72rem; color: #666; margin-bottom: 2px; }
        .contact-val { font-size: 0.9rem; font-weight: 500; color: #e0e0e0; }

        /* GALLERY */
        .gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; margin-top: 1.25rem; }
        .gallery-thumb { aspect-ratio: 16/10; border-radius: 8px; overflow: hidden; background: #1a1a1a; border: 1px solid #2a2a2a; cursor: pointer; transition: transform 0.2s, border-color 0.2s; position: relative; }
        .gallery-thumb:hover { transform: scale(1.03); border-color: #444; }
        .gallery-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gallery-placeholder { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.3rem; }
        .gallery-placeholder-icon { font-size: 1.2rem; opacity: 0.2; }
        .gallery-placeholder-text { font-size: 0.6rem; color: #444; text-align: center; padding: 0 0.25rem; }
        .gallery-caption-hover { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.85)); padding: 1rem 0.5rem 0.4rem; font-size: 0.65rem; color: #bbb; opacity: 0; transition: opacity 0.2s; }
        .gallery-thumb:hover .gallery-caption-hover { opacity: 1; }

        /* LIGHTBOX */
        .lightbox { position: fixed; inset: 0; z-index: 999; background: rgba(0,0,0,0.93); display: flex; align-items: center; justify-content: center; padding: 2rem; cursor: zoom-out; }
        .lightbox img { max-width: 100%; max-height: 85vh; border-radius: 10px; display: block; box-shadow: 0 20px 60px rgba(0,0,0,0.6); }
        .lightbox-caption { text-align: center; font-size: 0.85rem; color: #777; margin-top: 1rem; }
        .lightbox-close { position: absolute; top: 1.5rem; right: 1.5rem; background: #1a1a1a; border: 1px solid #333; color: #e8e8e8; width: 36px; height: 36px; border-radius: 50%; font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .lightbox-close:hover { background: #2a2a2a; }

        @media (max-width: 600px) { .gallery { grid-template-columns: repeat(2, 1fr); } }

        /* FOOTER */
        footer { padding: 2.5rem 1.5rem; border-top: 1px solid #1e1e1e; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #444; flex-wrap: wrap; gap: 0.5rem; max-width: 900px; margin: 0 auto; }

        @media (max-width: 700px) {
          .hamburger { display: flex; }
          .nav-links { display: none; }
          .about-grid { grid-template-columns: 1fr; gap: 2rem; }
          .exp-item { grid-template-columns: 1fr; gap: 0.5rem; }
          .hero-stats { gap: 2rem; }
          .edu-cert-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-name" onClick={() => scrollTo("hero")}>{ME.name}</div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <ul className="nav-links">
          {NAV.map(n => (
            <li key={n}><button onClick={() => scrollTo(n)}>{n}</button></li>
          ))}
        </ul>
      </nav>

      <div className={`mob ${menuOpen ? "open" : ""}`}>
        {NAV.map(n => <button key={n} onClick={() => scrollTo(n)}>{n}</button>)}
      </div>

      {/* HERO with Matrix background */}
      <div id="hero" className="hero-wrap">
        <MatrixCanvas />
        <div className="hero-fade" />
        <div className="hero" style={{ position: "relative", zIndex: 2 }}>
          <div className="container">
            <div className="hero-label">Available for opportunities</div>
            <div className="hero-name">{ME.name}</div>
            <div className="hero-title">{ME.title}</div>
            <p className="hero-desc">{ME.tagline}</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
              <button className="btn btn-secondary" onClick={() => scrollTo("contact")}>Get in Touch</button>
              <a href="/Sanjey-CV.pdf" download className="btn btn-secondary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>⬇ Download CV</a>
            </div>
            <div className="hero-stats">
              <div><div className="stat-n">3</div><div className="stat-l">Projects Built</div></div>
              <div><div className="stat-n">15+</div><div className="stat-l">Dashboards Delivered</div></div>
              <div><div className="stat-n">100K+</div><div className="stat-l">Records Processed</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        {/* ABOUT */}
        <Section id="about">
          <span className="sec-label">About</span>
          <div className="sec-title">Background</div>
          <div className="about-grid">
            <div>
              <div className="about-text">
                <p>I'm <strong>Sanjey Krishna Rajkumar</strong> — a recent Information Systems graduate from Western Sydney University, majoring in Data Science.</p>
                <p>I build tools that make data accessible — AI dashboards, safety platforms, sports management systems. My work bridges <strong>data, AI, and real-world business problems</strong>.</p>
                <p>Currently exploring paths in <strong>Data Analysis and Cybersecurity</strong>, and working toward my Power BI, AWS AI, and CompTIA Security+ certifications.</p>
              </div>
            </div>
            <div className="info-card">
              {[
                ["Location", ME.location],
                ["Degree", "BSc Information Systems"],
                ["University", "Western Sydney Uni"],
                ["Graduated", "November 2025"],
                ["Focus", "Data & AI"],
                ["Status", "Open to work 🟢"],
              ].map(([k, v]) => (
                <div className="info-row" key={k}>
                  <span className="info-k">{k}</span>
                  <span className="info-v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <span className="sec-label">Projects</span>
          <div className="sec-title">What I've Built</div>
          <div className="projects-list">
            {PROJECTS.map((p) => (
              <div className="project-item" key={p.title}>
                <div className="proj-header">
                  <div className="proj-title">{p.title}</div>
                  <span className="proj-tag">{p.tag}</span>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-highlight">{p.highlight}</div>
                <div className="proj-tech">
                  {p.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
                </div>
                {p.images && (
                  <div className="gallery">
                    {p.images.map((img, i) => (
                      <div
                        key={i}
                        className="gallery-thumb"
                        onClick={() => img.src && setLightbox(img)}
                        style={{ cursor: img.src ? "pointer" : "default" }}
                      >
                        {img.src ? (
                          <>
                            <img src={img.src} alt={img.caption} />
                            <div className="gallery-caption-hover">{img.caption}</div>
                          </>
                        ) : (
                          <div className="gallery-placeholder">
                            <div className="gallery-placeholder-icon">🖼</div>
                            <div className="gallery-placeholder-text">{img.caption}</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience">
          <span className="sec-label">Experience</span>
          <div className="sec-title">Where I've Worked</div>
          <div className="exp-list">
            {EXPERIENCE.map((e) => (
              <div className="exp-item" key={e.role}>
                <div>
                  <div className="exp-co">{e.company}</div>
                  <div className="exp-period">{e.period}</div>
                </div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <ul className="exp-pts">
                    {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION & CERTIFICATIONS */}
        <Section id="education">
          <span className="sec-label">Education & Certifications</span>
          <div className="sec-title">Qualifications</div>
          <div className="edu-cert-grid">
            <div>
              <span className="subsec-label">Education</span>
              <div className="edu-list">
                {EDUCATION.map((e) => (
                  <div className="edu-item" key={e.degree}>
                    <div className="edu-dot" style={{ background: e.badge === "future" ? "#555" : "#4f9eff" }} />
                    <div>
                      <div className="edu-degree">{e.degree}</div>
                      <div className="edu-school">{e.school}</div>
                      <div className="edu-period">{e.period}</div>
                      <span className={`edu-badge badge-${e.badge === "completed" ? "done" : "future"}`}>
                        {e.badge === "completed" ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="subsec-label">Certifications — In Progress</span>
              <div className="cert-list">
                {CERTIFICATIONS.map((c) => (
                  <div className="cert-item" key={c.name}>
                    <div>
                      <div className="cert-name">{c.name}</div>
                      <div className="cert-issuer">{c.issuer}</div>
                    </div>
                    <span className="cert-badge">In Progress</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact">
          <span className="sec-label">Contact</span>
          <div className="sec-title">Get in Touch</div>
          <p style={{ fontSize: "0.975rem", fontWeight: 300, color: "#999", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "480px" }}>
            Open to roles in Data Analysis, AI Integration, Business Intelligence, or Cybersecurity. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={`mailto:${ME.email}`} className="contact-link">
              <div className="contact-icon">✉</div>
              <div><div className="contact-lbl">Email</div><div className="contact-val">{ME.email}</div></div>
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-icon">in</div>
              <div><div className="contact-lbl">LinkedIn</div><div className="contact-val">linkedin.com/in/sanjey-rajkumar</div></div>
            </a>
            <a href={`tel:${ME.phone}`} className="contact-link">
              <div className="contact-icon">☎</div>
              <div><div className="contact-lbl">Phone</div><div className="contact-val">{ME.phone}</div></div>
            </a>
            <a href="/Sanjey-CV.pdf" download className="contact-link" style={{ textDecoration: "none" }}>
              <div className="contact-icon">⬇</div>
              <div><div className="contact-lbl">Resume</div><div className="contact-val">Download CV</div></div>
            </a>
          </div>
        </Section>

      </div>

      <footer>
        <span>© 2026 Sanjey Krishna Rajkumar</span>
        <span>Sydney, NSW</span>
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <div className="lightbox-caption">{lightbox.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}