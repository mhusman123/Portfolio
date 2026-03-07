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

const title = 'Hybrid Automated Grading & Learning Analytics Platform';
const description =
  'A neuro-symbolic AI platform combining deterministic code evaluation with generative AI feedback and longitudinal learning analytics — my final year thesis project.';
const roles = ['ML Engineering', 'Python Scripting', 'Frontend (React)', 'Data Analytics'];

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
          url="https://sindhmitty.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={fypTexture}
              width={1280}
              height={800}
              alt="Automated Grading Platform dashboard screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              In modern computer science education, manually grading programming assignments
              at scale is slow, inconsistent, and impossible to personalise. Traditional
              automated graders return only binary pass/fail results — they tell students
              <em> what</em> failed, not <em>why</em>, and offer no path forward. At the
              same time, relying on LLMs alone introduces hallucination risk: AI feedback
              without grounding in actual program output can actively mislead learners.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Neuro-Symbolic Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                The grading pipeline is built around two complementary layers. First, a
                <strong> symbolic evaluation layer</strong> — short Python scripts running
                static analysers, compilers, linters, and unit testing frameworks — verify
                syntactic correctness and logical validity, producing structured execution
                logs. Only after this deterministic pass does the system invoke the
                <strong>Google Gemini API</strong>, anchoring its explanations to real
                program output. This verify-then-generate protocol dramatically reduces
                hallucination risk.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Learning Analytics</ProjectSectionHeading>
              <ProjectSectionText>
                Beyond grading, the platform captures high-resolution learning telemetry:
                syntax error frequency, compilation latency, test-case failure patterns,
                time between error introduction and resolution, and re-submission counts.
                These feed into <strong>Longitudinal Skill Profiles</strong> — continuous
                representations of how each student&apos;s abilities evolve across the course.
              </ProjectSectionText>
              <ProjectSectionText>
                Instructors gain an analytics dashboard that spots students struggling with
                specific concepts, taking unusually long to debug, or making repeated errors
                — enabling early intervention rather than post-hoc remediation.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Time-Weighted Error Quotient</ProjectSectionHeading>
              <ProjectSectionText>
                The research introduced a novel metric — the <strong>Time-Weighted Error
                Quotient (EQ)</strong> — which quantifies the intensity and persistence of
                coding errors during development. By weighting error events by the time
                spent in an erroneous state, EQ provides a more nuanced picture of cognitive
                difficulty than simple error counts alone.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Python · Google Gemini API · React · PostgreSQL · Vercel
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
