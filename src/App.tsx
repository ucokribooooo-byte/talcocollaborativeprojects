import { useEffect, useState, type FormEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleDollarSign,
  Code2,
  Compass,
  GraduationCap,
  HeartPulse,
  Leaf,
  Menu,
  MessageCircle,
  Network,
  PenLine,
  Quote,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Utensils,
  X,
  Zap,
} from 'lucide-react';

type IconType = LucideIcon;

type FormValues = {
  fullName: string;
  companyName: string;
  email: string;
  industry: string;
  objective: string;
  description: string;
};

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Our Approach', href: '#process' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'About', href: '#about' },
];

const solutions: { number: string; icon: IconType; title: string; description: string }[] = [
  {
    number: '01',
    icon: Users,
    title: 'Brand Advocate Program',
    description: 'Develop an authentic network of advocates who support, share, and recommend your brand with confidence.',
  },
  {
    number: '02',
    icon: Network,
    title: 'Community Building',
    description: 'Build and manage communities around the values, behaviors, and aspirations of your target audience.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Community Activation',
    description: 'Turn community energy into UGC, campaigns, referrals, product seeding, and memorable brand experiences.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Advocacy Performance',
    description: 'Measure engagement quality, content performance, referrals, and the business impact of your advocacy engine.',
  },
];

const industries: { icon: IconType; title: string; description: string }[] = [
  { icon: HeartPulse, title: 'Healthcare & Life Sciences', description: 'Build trust-led communities around better outcomes.' },
  { icon: Sparkles, title: 'Beauty & Personal Care', description: 'Turn product love into visible, credible advocacy.' },
  { icon: Utensils, title: 'Food & Beverage', description: 'Create rituals, conversations, and shareable moments.' },
  { icon: Code2, title: 'Technology & Digital', description: 'Mobilize early adopters, makers, and champions.' },
  { icon: CircleDollarSign, title: 'Financial Services', description: 'Make expertise and trust easier to share.' },
  { icon: GraduationCap, title: 'Education', description: 'Connect learners, alumni, and future advocates.' },
  { icon: BriefcaseBusiness, title: 'Automotive & Mobility', description: 'Design communities around journeys and identity.' },
  { icon: ShoppingBag, title: 'Retail & E-commerce', description: 'Transform customers into a growth community.' },
  { icon: Building2, title: 'Property & Real Estate', description: 'Build belonging beyond the transaction.' },
  { icon: Compass, title: 'Travel & Hospitality', description: 'Make every experience worth coming back to.' },
  { icon: PenLine, title: 'Fashion & Lifestyle', description: 'Turn shared taste into cultural momentum.' },
  { icon: Leaf, title: 'Other Industries', description: 'Find the community opportunity unique to you.' },
];

const processSteps = [
  { number: '01', title: 'Discover', text: 'Understand your business goals, audience, and brand challenges.' },
  { number: '02', title: 'Map', text: 'Identify the communities and advocate potential around your brand.' },
  { number: '03', title: 'Strategize', text: 'Shape the advocacy strategy, experiences, and program design.' },
  { number: '04', title: 'Activate', text: 'Launch, manage, and optimize the community in motion.' },
  { number: '05', title: 'Measure', text: 'Track impact and uncover the next opportunities for growth.' },
];

const impactItems = [
  { label: 'Community Growth', value: 'Growth signals', width: '82%' },
  { label: 'Active Advocates', value: 'Advocate quality', width: '68%' },
  { label: 'Engagement Quality', value: 'Meaningful action', width: '76%' },
  { label: 'UGC Generated', value: 'Content momentum', width: '61%' },
  { label: 'Qualified Leads', value: 'Business relevance', width: '52%' },
  { label: 'Referral Conversion', value: 'Advocacy impact', width: '44%' },
];

const initialForm: FormValues = {
  fullName: '',
  companyName: '',
  email: '',
  industry: '',
  objective: '',
  description: '',
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialForm);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateField = (field: keyof FormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    if (formStatus === 'success') setFormStatus('idle');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('success');
    setFormValues(initialForm);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="page-container header-inner">
          <a className="brand-logo-link" href="#top" aria-label="TALCO home" onClick={closeMenu}>
            <img className="brand-logo" src="/TALCO_CREATIVE_INDONESIA_LOGO_PUTIH.png" alt="TALCO Creative Indonesia" />
          </a>
          <nav className={`desktop-nav ${isMenuOpen ? 'desktop-nav--open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s Collaborate <ArrowUpRightIcon /></a>
          </nav>
          <button className="mobile-menu-button" type="button" onClick={() => setIsMenuOpen((current) => !current)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="page-container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-line" /> Community-powered brand growth</div>
              <h1>Turn your community into your <em>strongest</em> brand advocate.</h1>
              <p className="hero-text">We help brands build meaningful communities, activate authentic advocates, and transform customer relationships into measurable business growth.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#solutions">Explore Solutions <ArrowRight size={17} /></a>
                <a className="button button--text" href="#contact">Start a Collaboration <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-note"><span className="note-dot" /> Strategic partner for brand owners, marketing leaders, and ambitious teams.</div>
            </div>
            <div className="ecosystem-wrap reveal-up reveal-delay" aria-label="Brand ecosystem illustration">
              <div className="ecosystem-orbit ecosystem-orbit--one" />
              <div className="ecosystem-orbit ecosystem-orbit--two" />
              <div className="ecosystem-lines"><span /><span /><span /><span /><span /></div>
              <div className="ecosystem-center"><div className="center-symbol"><Network size={27} strokeWidth={1.5} /></div><strong>COMMUNITY</strong><small>the growth engine</small></div>
              <EcosystemNode className="ecosystem-node--brand" icon={Building2} label="Brand" accent="blue" />
              <EcosystemNode className="ecosystem-node--advocates" icon={Users} label="Advocates" accent="mint" />
              <EcosystemNode className="ecosystem-node--content" icon={PenLine} label="Content" accent="gold" />
              <EcosystemNode className="ecosystem-node--growth" icon={TrendingUp} label="Growth" accent="coral" />
              <span className="ecosystem-caption">A connected system<br />built around your brand.</span>
            </div>
          </div>
          <div className="hero-bottom-rule page-container"><span>Brand</span><span>Community</span><span>Advocates</span><span>Content</span><span>Business growth</span></div>
        </section>

        <section className="value-section section-light" id="value">
          <div className="page-container">
            <div className="section-intro section-intro--split reveal-up">
              <div><div className="eyebrow eyebrow--dark"><span className="eyebrow-line" /> The opportunity</div><h2>Beyond marketing.<br /><em>Building meaningful</em> connections.</h2></div>
              <p>Attention is easy to win. Trust is earned over time. We help brands bridge that gap by turning communities into an active, strategic asset.</p>
            </div>
            <div className="challenge-grid">
              <ChallengeCard number="01" title="Attention without connection." text="Brands earn attention, but struggle to build relationships that last beyond a campaign." icon={Target} />
              <ChallengeCard number="02" title="Engagement without advocacy." text="Audience interaction does not always grow into confident, real-world recommendation." icon={MessageCircle} />
              <ChallengeCard number="03" title="Community without strategy." text="A community can be full of potential without the structure to turn it into business growth." icon={Compass} />
            </div>
            <div className="value-closing"><Quote size={25} /><span>We transform community engagement into meaningful brand advocacy.</span><ArrowDownRight size={19} /></div>
          </div>
        </section>

        <section className="solutions-section section-navy" id="solutions">
          <div className="page-container">
            <div className="section-intro section-intro--split section-intro--light reveal-up">
              <div><div className="eyebrow"><span className="eyebrow-line" /> What we do</div><h2>Build relationships.<br /><em>Activate advocacy.</em><br />Drive growth.</h2></div>
              <div><p>From the first insight to the next stage of growth, TALCO brings strategy, creativity, and measurement into one connected practice.</p><a className="inline-link inline-link--light" href="#contact">Talk to our team <ArrowRight size={16} /></a></div>
            </div>
            <div className="solution-grid">
              {solutions.map((solution) => <SolutionCard key={solution.number} {...solution} />)}
            </div>
          </div>
        </section>

        <section className="industries-section section-light" id="industries">
          <div className="page-container">
            <div className="section-heading reveal-up"><div><div className="eyebrow eyebrow--dark"><span className="eyebrow-line" /> Where we create impact</div><h2>Different industries.<br /><em>Different communities.</em><br />One strategic approach.</h2></div><p>Every category has its own culture, motivations, and moments of influence. We find the connective tissue that makes your community move.</p></div>
            <div className="industry-grid">{industries.map((industry) => <IndustryCard key={industry.title} {...industry} />)}</div>
            <p className="industry-note"><span /> Categories shown are initial marketing groupings, not an official KBLI classification.</p>
          </div>
        </section>

        <section className="process-section section-cream" id="process">
          <div className="page-container">
            <div className="section-heading section-heading--process reveal-up"><div><div className="eyebrow eyebrow--dark"><span className="eyebrow-line" /> Our approach</div><h2>From community insights<br />to <em>measurable impact.</em></h2></div><p>A clear, collaborative process that turns what your audience cares about into what your business can grow.</p></div>
            <div className="process-track">{processSteps.map((step, index) => <ProcessStep key={step.number} {...step} isLast={index === processSteps.length - 1} />)}</div>
          </div>
        </section>

        <section className="impact-section section-light" id="impact">
          <div className="page-container">
            <div className="section-heading reveal-up"><div><div className="eyebrow eyebrow--dark"><span className="eyebrow-line" /> Our impact</div><h2>More than engagement.<br /><em>Meaningful business impact.</em></h2></div><p>Good community work should feel human and perform with purpose. We make the signals visible, so you can make better decisions.</p></div>
            <div className="impact-layout">
              <div className="impact-dashboard">
                <div className="dashboard-top"><span className="dashboard-label"><span className="live-dot" /> Advocacy performance</span><span className="demo-label">DEMO VIEW</span></div>
                <div className="dashboard-main"><div><span className="dashboard-kicker">COMMUNITY MOMENTUM</span><strong>Meaningful<br /><em>signals.</em></strong></div><div className="dashboard-sparkline"><span className="sparkline-bar sparkline-bar--short" /><span className="sparkline-bar sparkline-bar--medium" /><span className="sparkline-bar sparkline-bar--tall" /><span className="sparkline-bar sparkline-bar--peak" /><span className="sparkline-bar sparkline-bar--high" /></div></div>
                <div className="impact-bars">{impactItems.slice(0, 3).map((item) => <ImpactBar key={item.label} {...item} />)}</div>
              </div>
              <div className="impact-list">{impactItems.slice(3).map((item, index) => <div className="impact-list-item" key={item.label}><span className="impact-index">0{index + 4}</span><div><strong>{item.label}</strong><p>{item.value}</p></div><ArrowUpRightIcon /></div>)}<div className="impact-list-foot"><Check size={15} /> No vanity metrics. Just signals that help you move forward.</div></div>
            </div>
          </div>
        </section>

        <section className="about-section section-navy" id="about">
          <div className="page-container">
            <div className="about-top reveal-up"><div><div className="eyebrow"><span className="eyebrow-line" /> Why TALCO</div><h2>Built around your brand.<br /><em>Driven by your community.</em></h2></div><p>We sit at the intersection of brand strategy, community culture, and measurable growth — creating programs people want to be part of.</p></div>
            <div className="about-grid"><div className="about-statement"><span className="statement-mark">“</span><p>When people feel seen by a brand, they do more than stay. They show up, speak up, and bring others with them.</p><span className="statement-rule" /></div><div className="strength-grid">{[['01', 'Strategic, not just tactical.'], ['02', 'Industry-relevant.'], ['03', 'Authentic by design.'], ['04', 'Performance-oriented.']].map(([number, title]) => <div className="strength-item" key={number}><span>{number}</span><strong>{title}</strong><ArrowUpRightIcon /></div>)}</div></div>
          </div>
        </section>

        <section className="contact-section section-cream" id="contact">
          <div className="page-container contact-layout">
            <div className="contact-copy reveal-up"><div className="eyebrow eyebrow--dark"><span className="eyebrow-line" /> Start a conversation</div><h2>Let&apos;s build a community that <em>moves your brand forward.</em></h2><p>Tell us about your business objectives. Let&apos;s explore the right community strategy for your brand.</p><div className="contact-direct"><span>Prefer a quick conversation?</span><a href="https://wa.me/6285222134009" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a><small>+62 852 2213 4009</small></div></div>
            <div className="form-card"><div className="form-heading"><span>01 / Inquiry</span><h3>Tell us a little about your ambition.</h3></div>{formStatus === 'success' ? <div className="form-success"><div className="success-icon"><Check size={27} /></div><h3>Thank you for reaching out.</h3><p>Your inquiry is ready to start a conversation. We&apos;ll be in touch through the details you shared.</p><button className="button button--outline" type="button" onClick={() => setFormStatus('idle')}>Send another inquiry</button></div> : <form onSubmit={handleSubmit}><div className="form-row"><FormField label="Full name" value={formValues.fullName} onChange={(value) => updateField('fullName', value)} required /><FormField label="Company name" value={formValues.companyName} onChange={(value) => updateField('companyName', value)} required /></div><div className="form-row"><FormField label="Work email" type="email" value={formValues.email} onChange={(value) => updateField('email', value)} required /><label className="form-field"><span>Industry <small>(optional)</small></span><select value={formValues.industry} onChange={(event) => updateField('industry', event.target.value)}><option value="">Select one</option>{industries.slice(0, -1).map((industry) => <option value={industry.title} key={industry.title}>{industry.title}</option>)}</select></label></div><label className="form-field"><span>Business objective</span><select value={formValues.objective} onChange={(event) => updateField('objective', event.target.value)} required><option value="">What would you like to achieve?</option><option value="Build a community">Build a community</option><option value="Activate advocates">Activate advocates</option><option value="Create UGC">Create UGC</option><option value="Improve referrals">Improve referrals</option><option value="Measure community impact">Measure community impact</option></select></label><label className="form-field"><span>Project description <small>(optional)</small></span><textarea value={formValues.description} onChange={(event) => updateField('description', event.target.value)} placeholder="Tell us what you are working toward..." rows={4} /></label><button className="button button--primary button--full" type="submit">Submit Inquiry <Send size={16} /></button><p className="form-disclaimer">This form is for initial inquiries only. No information is stored in a database.</p></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="page-container footer-top"><div><a className="brand-logo-link brand-logo-link--footer" href="#top" aria-label="TALCO home"><img className="brand-logo" src="/TALCO_CREATIVE_INDONESIA_LOGO_PUTIH.png" alt="TALCO Creative Indonesia" /></a><p>Building meaningful brand relationships through strategic communities and authentic advocacy.</p></div><div className="footer-links"><div><span className="footer-label">Explore</span><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#process">Our Approach</a><a href="#impact">Our Impact</a></div><div><span className="footer-label">Connect</span><a href="#about">About TALCO</a><a href="#contact">Contact</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRightIcon /></a></div></div></div><div className="page-container footer-bottom"><span>© 2026 TALCO Collaborative Project.</span><span>Building communities. Creating advocates. Driving growth.</span><a href="#top" aria-label="Back to top"><ArrowUpRightIcon /></a></div></footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight size={15} className="arrow-up-right" />;
}

function EcosystemNode({ className, icon: Icon, label, accent }: { className: string; icon: IconType; label: string; accent: string }) {
  return <div className={`ecosystem-node ${className}`}><div className={`node-icon node-icon--${accent}`}><Icon size={19} /></div><span>{label}</span></div>;
}

function ChallengeCard({ number, title, text, icon: Icon }: { number: string; title: string; text: string; icon: IconType }) {
  return <article className="challenge-card"><span className="card-number">{number}</span><div className="challenge-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRightIcon /></article>;
}

function SolutionCard({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: IconType }) {
  return <article className="solution-card"><div className="solution-card-top"><span>{number}</span><div className="solution-icon"><Icon size={22} /></div></div><h3>{title}</h3><p>{description}</p><a href="#contact" className="solution-link">Learn more <ArrowRight size={15} /></a></article>;
}

function IndustryCard({ icon: Icon, title, description }: { icon: IconType; title: string; description: string }) {
  return <article className="industry-card"><div className="industry-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRightIcon /></article>;
}

function ProcessStep({ number, title, text, isLast }: { number: string; title: string; text: string; isLast: boolean }) {
  return <article className={`process-step ${isLast ? 'process-step--last' : ''}`}><div className="process-number">{number}<span className="process-dot" /></div><h3>{title}</h3><p>{text}</p></article>;
}

function ImpactBar({ label, value, width }: { label: string; value: string; width: string }) {
  return <div className="impact-bar"><div className="impact-bar-label"><span>{label}</span><small>{value}</small></div><div className="bar-track"><span style={{ width }} /></div></div>;
}

function FormField({ label, value, onChange, type = 'text', required = false }: { label: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean }) {
  return <label className="form-field"><span>{label} {required ? <b>*</b> : <small>(optional)</small>}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} /></label>;
}

export default App;
