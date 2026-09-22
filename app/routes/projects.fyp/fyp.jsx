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

const title = 'Sindh School of Technology (SST Nexus) — Trilingual Educational Platform & Smart AI Campus';
const description =
  'A premier digital educational management system, smart AI campus platform, and trilingual learning environment developed as my Final Year Project (FYP) for Sindh School of Technology (SST) and the University of Sindh, Jamshoro.';
const roles = [
  'Full-Stack & AI Engineering',
  'Trilingual Architecture (English • Urdu • Sindhi)',
  'Multi-Model AI Gateway (Gemini 1.5 / DeepSeek-R1 / GPT-4o)',
  'Dual-Curriculum Integration (Cambridge CAIE & Sindh BISE)',
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
              alt="Sindh School of Technology (SST Nexus) Educational Platform screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Vision &amp; Purpose</ProjectSectionHeading>
            <ProjectSectionText>
              Modern educational institutions across Sindh, Pakistan require unified digital platforms that seamlessly
              connect students, teachers, administrators, and parents. <strong>Sindh School of Technology (SST)</strong>
              and its Sixth Form branch, <strong>SST Nexus</strong>, demanded a system that pairs world-class Cambridge CAIE
              and Sindh BISE curriculum management with a culturally rooted, <strong>trilingual learning experience in English,
              Urdu, and Sindhi</strong>.
            </ProjectSectionText>
            <ProjectSectionText>
              This platform serves as a complete digital institution: uniting online admissions, fee workflows, live AI lab
              and robotics streams, socratic AI tutoring, and automated rubric evaluations under one modern interface.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Trilingual &amp; Dual-Curriculum Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Built with a native internationalization engine, the platform enables effortless language switching across
                <strong> English, Urdu (اردو), and Sindhi (سنڌي)</strong> with customized Right-to-Left (RTL) typography.
              </ProjectSectionText>
              <ProjectSectionText>
                It facilitates dual-curriculum certification for Cambridge CAIE (O/A Levels) alongside Sindh BISE / FBISE
                Matriculation and Intermediate boards, allowing students and educators to access syllabi, timetables, and
                diagnostic scorecards in their chosen language.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Smart AI Classrooms &amp; Socratic Tutor</ProjectSectionHeading>
              <ProjectSectionText>
                Integrated with smart computer science classrooms and robotics centers, the platform incorporates an AI reasoning
                gateway (powered by <strong>Google Gemini 1.5 Flash</strong> and <strong>DeepSeek-R1</strong>) with strict zero-spoil
                pedagogical guardrails and KaTeX / LaTeX formula rendering, guiding students through complex STEM concepts.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>AI Quiz Arena &amp; Autograding Copilot</ProjectSectionHeading>
              <ProjectSectionText>
                Features an adaptive 3-tier exam simulator using Fisher-Yates zero-repetition randomization, live Socratic hints,
                and a 4-tier formative autograder that evaluates student coursework, generates structured revision roadmaps, and
                tracks longitudinal cognitive progress.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Next.js 15 · React 19 · TypeScript · Tailwind CSS · Google Gemini 1.5 Flash · DeepSeek-R1 · PostgreSQL · FastAPI · KaTeX · Vercel
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
