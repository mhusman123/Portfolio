import fypTexture from '~/assets/fyp.png';
import summarizerTexture from '~/assets/summarizer.png';
import careerTexture from '~/assets/career.png';
import bankingTexture from '~/assets/banking.png';
import bakeryTexture from '~/assets/bakery.png';
import chronopulseTexture from '~/assets/chronopulse.png';
import storeTexture from '~/assets/store.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { Experience } from './experience';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI/ML Engineer + Web Engineer',
    description: `Portfolio of ${config.name} — an AI/ML Engineer and Web Engineer specialising in deep learning, NLP, computer vision, and modern full-stack web solutions.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const experience = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      projectSeven,
      experience,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div className={styles.categoryHeader} id="ai-projects">
        <div className={styles.categoryBadge}>
          <span className={styles.categoryDot} />
          <span>01 / AI &amp; Machine Learning Projects</span>
        </div>
        <h2 className={styles.categoryTitle}>Artificial Intelligence &amp; Machine Learning</h2>
        <p className={styles.categorySubtitle}>
          Applied machine learning systems, deep learning pipelines, generative AI solutions, and automated analytics.
        </p>
      </div>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        category="AI & EdTech / Intelligence Platform"
        metrics={['Multi-Model AI (Gemini / DeepSeek)', 'AI Quiz Arena & Autograder', 'Trilingual (EN / UR / SD)']}
        tags={['Next.js 15', 'TypeScript', 'Gemini 1.5', 'DeepSeek-R1', 'FastAPI', 'PostgreSQL', 'Tailwind CSS']}
        title="SST Nexus — Intelligent AI Tutoring & Socratic Learning Platform"
        description="Full-stack educational intelligence platform featuring multi-model Socratic AI tutoring (GPT-4o, Gemini 1.5, DeepSeek-R1), timed AI Quiz Arena with Fisher-Yates randomization, 4-tier formative autograding, and trilingual support (English, Urdu, Sindhi)."
        buttonText="Live Demo"
        buttonLink="https://fyp-f8xk.vercel.app/"
        repoLink="https://github.com/mhusman123"
        detailsLink="/projects/fyp"
        model={{
          type: 'screenshot',
          src: fypTexture,
          alt: 'SST Nexus Intelligent AI Tutoring & Socratic Learning Platform screenshot',
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        category="LLM & GenAI"
        metrics={['Groq LLaMA 3.3 70B', 'Multi-Format (PDF/DOCX)', 'FastAPI REST']}
        tags={['Groq API', 'LLaMA 3.3', 'FastAPI', 'NLP', 'Python', 'Railway']}
        title="Intelligent Document Summarizer API"
        description="AI-powered REST API that summarizes PDF/DOCX/TXT documents, extracts keywords, and answers natural language questions using Groq LLaMA 3.3 70B with offline fallback."
        buttonText="Live Demo"
        buttonLink="https://web-production-4811b.up.railway.app/"
        repoLink="https://github.com/mhusman123"
        detailsLink="/projects/summarizer"
        model={{
          type: 'screenshot',
          src: summarizerTexture,
          alt: 'Intelligent Document Summarizer screenshot',
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        category="Machine Learning"
        metrics={['80% Test Accuracy', 'Random Forest Classifier', 'Streamlit UI']}
        tags={['Scikit-Learn', 'FastAPI', 'Streamlit', 'Pandas', 'EDA', 'Python']}
        title="Predicting Students Career Aspirations"
        description="ML models predicting students' career aspirations from academic and personal data. Random Forest classifier with 80% accuracy, deployed via FastAPI with career recommendations."
        buttonText="Live Demo"
        buttonLink="https://studentaspiration.streamlit.app/"
        repoLink="https://github.com/mhusman123"
        detailsLink="/projects/career"
        model={{
          type: 'screenshot',
          src: careerTexture,
          alt: 'Career Aspiration Predictor screenshot',
        }}
      />
      <div className={styles.categoryHeader} id="web-projects">
        <div className={styles.categoryBadge}>
          <span className={styles.categoryDot} />
          <span>02 / Full-Stack &amp; Web Applications</span>
        </div>
        <h2 className={styles.categoryTitle}>Full-Stack &amp; Web Applications</h2>
        <p className={styles.categorySubtitle}>
          Modern responsive web applications, high-performance banking platforms, e-commerce solutions, and interactive tools.
        </p>
      </div>
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        category="Fintech / Full-Stack"
        metrics={['Clean Architecture + CQRS', '.NET 10 + React 18', 'PayFast & 1-Link Sandbox']}
        tags={['React 18', '.NET 10', 'Tailwind CSS v4', 'PostgreSQL', 'CQRS', 'PayFast']}
        title="CoreBank — NextGen Enterprise Digital Banking Platform"
        description="High-performance enterprise digital banking platform featuring SBP-regulated commercial ledgers, real-time PKR liquidity analytics, Raast QR checkout, and PayFast sandbox integration."
        buttonText="Live Demo"
        buttonLink="https://enterprise-banking.vercel.app/"
        repoLink="https://github.com/mhusman123/Enterprise-Banking"
        model={{
          type: 'screenshot',
          src: bankingTexture,
          alt: 'CoreBank Enterprise Digital Banking Platform screenshot',
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        category="E-Commerce / Full-Stack"
        metrics={['Next.js 15 App Router', 'Zustand Cart Engine', 'Fuse.js Instant Search']}
        tags={['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Framer Motion', 'Fuse.js']}
        title="Porto's Donuts Bakery — Quetta Artisanal E-Commerce"
        description="Modern gourmet bakery e-commerce platform with Quetta express delivery guard, custom donut flavor selectors, persistent Zustand cart management, and instant WhatsApp ordering."
        buttonText="Live Demo"
        buttonLink="https://bakery-website-theta-wine.vercel.app/"
        repoLink="https://github.com/mhusman123/Bakery-Website"
        model={{
          type: 'screenshot',
          src: bakeryTexture,
          alt: "Porto's Donuts Bakery Quetta screenshot",
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        category="Web Application"
        metrics={['Real-Time Chrono Ticker', '9-Planet Cosmic Age', 'Lifetime Bio-Vitals Matrix']}
        tags={['React 19', 'Vite', 'Tailwind CSS v4', 'Canvas Confetti', 'Glassmorphism']}
        title="ChronoPulse — Modern Age & Life Insights Calculator"
        description="Futuristic cyberpunk glassmorphic web application computing real-time live age down to seconds, 9-planet interplanetary cosmic age, bio-vital heartbeats/sleep statistics, and milestone timelines."
        buttonText="Live Demo"
        buttonLink="https://chrono-pulse-modern-age-life-calcul.vercel.app/"
        repoLink="https://github.com/mhusman123/ChronoPulse-Modern-Age-Life-Calculator"
        model={{
          type: 'screenshot',
          src: chronopulseTexture,
          alt: 'ChronoPulse Modern Age & Life Calculator screenshot',
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        category="Full-Stack Web App"
        metrics={['PayFast Gateway', 'MERN Architecture', 'Responsive UI']}
        tags={['React', 'Node.js', 'Express', 'MongoDB', 'PayFast', 'REST API']}
        title="PrimeBrothers E-Commerce Platform"
        description="Full-stack e-commerce solution with React frontend, Node.js backend, and PayFast payment integration for a seamless online shopping experience."
        buttonText="Live Demo"
        buttonLink="https://primebrothers-store.vercel.app/"
        repoLink="https://github.com/mhusman123"
        detailsLink="/projects/primebrothers"
        model={{
          type: 'screenshot',
          src: storeTexture,
          alt: 'PrimeBrothers Store screenshot',
        }}
      />
      <Experience
        id="experience"
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
