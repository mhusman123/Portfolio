import careerTexture from '~/assets/career.png';
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
import styles from './career.module.css';

const title = 'Predicting Students Career Aspirations';
const description =
  'An end-to-end machine learning pipeline predicting students\' likely career paths from academic and personal data — Random Forest classifier achieving 80% accuracy, deployed as an interactive Streamlit dashboard.';
const roles = ['Data Science', 'ML Engineering', 'EDA & Visualisation', 'Streamlit Deployment'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Career = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.career}>
        <ProjectHeader
          title={title}
          description={description}
          url="https://studentaspiration.streamlit.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={careerTexture}
              width={1280}
              height={800}
              alt="Career Aspiration Predictor Streamlit dashboard screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Problem Statement</ProjectSectionHeading>
            <ProjectSectionText>
              Career guidance systems in universities are typically manual and reactive —
              a student must seek out an advisor, often too late. This project explores
              whether a student&apos;s academic performance, interests, and personal attributes
              can predict their career aspiration early enough to deliver proactive,
              data-driven guidance.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Exploratory Data Analysis</ProjectSectionHeading>
              <ProjectSectionText>
                The dataset was thoroughly profiled before modelling. Seaborn heatmaps
                revealed correlations between academic subjects and career clusters.
                Feature importance analysis using <strong>Random Forest&apos;s built-in
                Gini impurity rankings</strong> identified the top predictors: STEM
                subject grades, extracurricular participation, and self-reported interests.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Model Comparison</ProjectSectionHeading>
              <ProjectSectionText>
                Four classifiers were trained and evaluated — Logistic Regression, K-Nearest
                Neighbours, Support Vector Machine, and Random Forest. Random Forest
                outperformed all others at <strong>80% accuracy</strong>, benefiting from
                ensemble variance reduction and its robustness to correlated features in
                the dataset.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Interactive Dashboard</ProjectSectionHeading>
            <ProjectSectionText>
              The final model was deployed as a <strong>Streamlit</strong> web app. Users
              can input academic and personal attributes through an intuitive form and
              receive an instant career prediction with a confidence score and brief
              recommendation. The dashboard also includes visualisations of feature
              importance and class distributions.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Python · Scikit-learn · Random Forest · Pandas · NumPy ·
              Seaborn · Matplotlib · FastAPI · Streamlit · Streamlit Cloud
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
