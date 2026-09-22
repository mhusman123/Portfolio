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

const title = 'SST Nexus — Intelligent AI Tutoring & Socratic Learning Platform';
const description =
  'A full-stack educational intelligence platform featuring multi-model Socratic AI tutoring, timed AI Quiz Arena with zero-repetition randomization, 4-tier formative autograding, and native trilingual support (English, Urdu, Sindhi).';
const roles = [
  'Full-Stack & AI Engineering',
  'Multi-Model LLM Gateway (Gemini 1.5 / DeepSeek-R1 / GPT-4o)',
  'Socratic Tutoring Engine',
  'Autograding & Learning Telemetry',
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
              width={1280}
              height={800}
              alt="SST Nexus Intelligent AI Tutoring and Educational Platform screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Vision &amp; Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Traditional educational software presents two extremes: rigid autograders that offer binary
              pass/fail marks without explaining why, or generic LLMs that hallucinate solutions and give away
              answers immediately, short-circuiting genuine student comprehension.
            </ProjectSectionText>
            <ProjectSectionText>
              <strong>SST Nexus</strong> resolves this paradigm by delivering an intelligent Socratic tutoring
              ecosystem. Built specifically to empower educational institutions in Sindh and Pakistan, it combines
              zero-spoil pedagogical guardrails, adaptive exam simulations, automated rubric evaluations, and
              trilingual immersion across English, Urdu, and Sindhi.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Multi-Model AI Gateway &amp; Socratic Reasoning</ProjectSectionHeading>
              <ProjectSectionText>
                The platform incorporates an interchangeable AI reasoning core powered by <strong>Google Gemini 1.5 Flash</strong>,
                <strong>DeepSeek-R1</strong>, and <strong>GPT-4o</strong>. A low-latency streaming pipeline (&lt;800ms) delivers
                step-by-step guidance, breaking down complex calculus, physics, chemistry, biology, and computer science problems
                into manageable conceptual milestones.
              </ProjectSectionText>
              <ProjectSectionText>
                Every interaction is governed by strict zero-spoil guardrails with full KaTeX / LaTeX mathematical
                formula typesetting and biochemical diagram rendering, training students to discover answers through deductive inquiry.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>AI Quiz Arena &amp; Exam Simulator</ProjectSectionHeading>
              <ProjectSectionText>
                Features an interactive 3-tier timed exam simulator (10-minute / 20-question, 17-minute / 35-question,
                and 25-minute / 50-question presets) utilizing the <strong>Fisher-Yates zero-repetition randomization algorithm</strong>.
                Students receive live, in-quiz Socratic hints that guide thinking without compromising score integrity, culminating
                in granular topic-level mastery scorecards.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Formative Rubric Autograder &amp; Copilot</ProjectSectionHeading>
              <ProjectSectionText>
                Educators benefit from a 4-tier rubric evaluation system that analyzes open-ended student submissions,
                produces actionable revision roadmaps, and conducts semantic originality checks. Longitudinal skill telemetry
                helps teachers identify struggling cohorts and cognitive bottlenecks in real time.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Trilingual &amp; Dual-Curriculum Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Engineered with comprehensive internationalization, the platform supports seamless language switching
                between <strong>English, Urdu, and Sindhi</strong> with customized RTL script typography. It is fully
                aligned with Cambridge CAIE (O/A Levels) standards and Sindh BISE / FBISE matriculation and intermediate syllabi.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Next.js 15 · React 19 · TypeScript · Google Gemini 1.5 Flash · DeepSeek-R1 · OpenAI GPT-4o · FastAPI · PostgreSQL · Tailwind CSS · KaTeX · Vercel
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
