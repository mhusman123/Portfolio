import fypTexture from '~/assets/fyp.png';
import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectSectionColumns,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './fyp.module.css';

const title = 'AI Powered Education Platform (EduPlatform AI) — Enterprise-Grade AI Learning & Autograding Infrastructure';
const description =
  'An all-in-one licensable B2B academic intelligence ecosystem combining an AI Socratic tutor, 4-tier formative autograding, adaptive 3-tier exam simulation with Fisher-Yates zero-collision randomization, and deep semantic plagiarism detection across 72+ compiled routes.';
const roles = [
  'Lead Full-Stack & AI Systems Architect',
  'Multi-Model Reasoning Gateway (Gemini 1.5 Flash • DeepSeek-R1 • GPT-4o)',
  'Adaptive Timed Exam Simulator (20 / 35 / 50 Question Presets)',
  '4-Tier Formative Rubric Autograder & Plagiarism Engine',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const FYP = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.fyp}>
        <ProjectHeader
          title={title}
          description={description}
          url="https://fyp-f8xk.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={fypTexture}
              width={1440}
              height={900}
              alt="AI Powered Education Platform (EduPlatform AI) screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Executive Overview &amp; Institutional Adaptability</ProjectSectionHeading>
            <ProjectSectionText>
              <strong>EduPlatform AI (AI Powered Education Platform)</strong> is an enterprise-grade, licensable B2B academic
              intelligence infrastructure engineered for primary, secondary, college, and higher-education institutions. It provides
              schools with world-class AI learning capabilities without prohibitive enterprise licensing costs.
            </ProjectSectionText>
            <ProjectSectionText>
              The platform is completely curriculum-agnostic: seamlessly configurable for Cambridge CAIE (O/A Levels),
              International Baccalaureate (IB), Edexcel, American AP, and national/provincial secondary examination boards.
              From foundational exercises for Grade 1 pupils up to algorithmic complexity and research synthesis for university
              scholars, the ecosystem covers 72+ production-compiled routes.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Multi-Model AI Gateway &amp; Socratic Tutor</ProjectSectionHeading>
              <ProjectSectionText>
                At the core of the platform is an intelligent multi-model gateway dynamically routing prompts between
                <strong> Google Gemini 1.5 Flash</strong> (sub-800ms streaming latency), <strong>DeepSeek-R1</strong>
                (advanced STEM &amp; mathematical reasoning), and <strong>OpenAI GPT-4o</strong> (humanities &amp; autograding).
              </ProjectSectionText>
              <ProjectSectionText>
                The <strong>Socratic AI Tutor (/ai-tutor)</strong> enforces strict zero-spoil pedagogical guardrails. Instead of
                delivering direct answers, it breaks complex problems down into step-by-step checkpoints, rendering full
                <strong> KaTeX / LaTeX mathematical typesetting</strong>, chemical equations, and multi-language code snippets with
                syntax highlighting.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Adaptive Timed Quiz Arena (/quiz-generator)</ProjectSectionHeading>
              <ProjectSectionText>
                Designed for high-stakes exam preparation, the arena provides 3-tier timed presets:
                <strong> Quick Sprint (20 Questions / 10m)</strong>, <strong>Standard Assessment (35 Questions / 17m)</strong>,
                and <strong>Comprehensive Exam (50 Questions / 25m)</strong>.
              </ProjectSectionText>
              <ProjectSectionText>
                It utilizes the <strong>Fisher-Yates algorithmic shuffle</strong> to guarantee zero-collision randomization across sessions,
                provides real-time in-quiz Socratic hints without score penalties, and generates instant diagnostic scorecards across topic mastery,
                answering speed, and accuracy.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Formative Rubric Autograder &amp; Plagiarism Engine</ProjectSectionHeading>
              <ProjectSectionText>
                The <strong>Rubric Autograder (/autograding)</strong> evaluates essays and code across a 4-tier weighted standard:
                Conceptual Understanding (40%), Technical Depth (30%), Critical Thinking (20%), and Presentation (10%), generating
                personalized revision roadmaps alongside a 1-click teacher verification queue.
              </ProjectSectionText>
              <ProjectSectionText>
                The <strong>Originality Engine (/plagiarism)</strong> executes semantic and syntactic similarity indexing with
                sentence-level heatmaps under a strict <strong>zero-data-retention policy</strong> — student work is never leaked or stored in public LLMs.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Gamified Merit Economy &amp; Institutional Portals</ProjectSectionHeading>
            <ProjectSectionText>
              Fosters continuous academic discipline through a gamified economy featuring daily study streak multipliers with
              anti-cheat validation, XP progression, and verifiable merit badges (<em>STEM Pioneer</em>, <em>Calculus Master</em>, <em>Code Artisan</em>).
              Educators gain real-time cohort mastery telemetry, automated at-risk intervention flags, and formalized compassionate grade request queues.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Technology Stack &amp; Topology</ProjectSectionHeading>
            <ProjectSectionText>
              Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · ShadCN UI · Prisma ORM 6.16 · PostgreSQL / SQLite · Google Gemini 1.5 Flash · DeepSeek-R1 · OpenAI GPT-4o-mini · NextAuth.js · KaTeX · Vercel
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
