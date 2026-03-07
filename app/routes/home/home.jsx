import fypTexture from '~/assets/fyp.png';
import summarizerTexture from '~/assets/summarizer.png';
import careerTexture from '~/assets/career.png';
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
    title: 'ML Engineer + Data Scientist',
    description: `Portfolio of ${config.name} — a Machine Learning & AI Engineer specialising in deep learning, NLP, computer vision, and Python-powered data science solutions.`,
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
  const experience = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, experience, details];

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
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Automated Grading & Learning Analytics"
        description="Intelligent automated grading system using rule-based logic and data analytics to evaluate student performance, reduce manual grading effort, and provide learning insights."
        buttonText="Live Demo"
        buttonLink="https://sindhmitty.vercel.app/"
        detailsLink="/projects/fyp"
        model={{
          type: 'screenshot',
          src: fypTexture,
          alt: 'Automated Grading Platform screenshot',
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Intelligent Document Summarizer API"
        description="AI-powered REST API that summarizes PDF/DOCX/TXT documents, extracts keywords, and answers natural language questions using Groq LLaMA 3.3 70B with offline fallback."
        buttonText="Live Demo"
        buttonLink="https://web-production-4811b.up.railway.app/"
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
        title="Predicting Students Career Aspirations"
        description="ML models predicting students' career aspirations from academic and personal data. Random Forest classifier with 80% accuracy, deployed via FastAPI with career recommendations."
        buttonText="Live Demo"
        buttonLink="https://studentaspiration.streamlit.app/"
        detailsLink="/projects/career"
        model={{
          type: 'screenshot',
          src: careerTexture,
          alt: 'Career Aspiration Predictor screenshot',
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="PrimeBrothers E-Commerce Platform"
        description="Full-stack e-commerce solution with React frontend, Node.js backend, and PayFast payment integration for a seamless online shopping experience."
        buttonText="Live Demo"
        buttonLink="https://primebrothers-store.vercel.app/"
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
