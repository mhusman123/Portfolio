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

const title = 'Sindh School of Technology — Educational Management Platform';
const description =
  'A comprehensive digital educational management system, smart AI campus platform, and trilingual learning environment developed as my Final Year Project (FYP) for the University of Sindh, Jamshoro.';
const roles = ['Full-Stack Engineering', 'Next.js & React', 'Trilingual Architecture', 'PostgreSQL & Analytics'];

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
              alt="Sindh School of Technology Educational Platform screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Vision &amp; Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Modern educational institutions require unified digital ecosystems that seamlessly connect
              students, faculty, administrators, and parents. For institutions in Sindh, Pakistan, this
              presents a unique requirement: delivering world-class Cambridge CAIE and Sindh BISE curriculum
              tracking while offering seamless native fluency across three official languages — English,
              Urdu, and Sindhi. The platform was designed to eliminate administrative fragmentation and
              deliver real-time academic insights.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Trilingual &amp; Dual-Board Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The platform features a localized content and internationalization engine enabling complete
                trilingual switching across English, Urdu, and Sindhi. It integrates dual-curriculum management
                for Cambridge CAIE (O/A Levels) alongside Sindh BISE / FBISE Matriculation and Intermediate boards.
                Student records, course syllabi, examination rubrics, and digital certificates are dynamically
                rendered with full RTL (Right-to-Left) script optimization.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Smart Campus &amp; AI Labs Integration</ProjectSectionHeading>
              <ProjectSectionText>
                Integrated with smart computer science classrooms and robotics centers, the platform
                incorporates automated code grading, real-time telemetry, and longitudinal performance tracking.
                Instructors can monitor student progress across computational thinking assignments, identifying
                cognitive bottlenecks early and providing automated, scaffolded feedback.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Admissions, Fees &amp; Portal Management</ProjectSectionHeading>
              <ProjectSectionText>
                Features automated student onboarding, online fee invoice generation with verification workflows,
                parent enquiry management, and role-based access control (RBAC) ensuring secure student, parent,
                and teacher communication.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Next.js 15 · React · TypeScript · Tailwind CSS · PostgreSQL · FastAPI · Vercel
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
