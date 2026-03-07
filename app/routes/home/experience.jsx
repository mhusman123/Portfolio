import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment } from 'react';
import aiCert from '~/assets/AI.jpg.jpg';
import dsCert from '~/assets/DS.jpg.jpg';
import mlCert from '~/assets/ML.jpg.jpg';
import styles from './experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'ITSOLERA PVT LTD',
    url: 'https://itsolera.com/',
    period: 'July 2025 – September 2025',
    type: 'Data Science Track',
    description:
      'Developed end-to-end data science solutions including exploratory data analysis, feature engineering, and model building. Built predictive models for disease diagnosis and financial risk forecasting. Deployed models as production APIs using FastAPI and Flask, and created interactive dashboards in Streamlit to communicate insights to non-technical stakeholders.',
    skills: ['Scikit-learn', 'Pandas', 'FastAPI', 'Flask', 'Streamlit', 'EDA', 'Python'],
    cert: dsCert,
    certAlt: 'Data Science Internship Certificate — ITSOLERA PVT LTD',
  },
  {
    id: 2,
    role: 'Machine Learning Intern',
    company: 'ITSOLERA PVT LTD',
    url: 'https://itsolera.com/',
    period: 'February 2025 – July 2025',
    type: 'Machine Learning Track',
    description:
      'Built supervised and unsupervised ML models for real-world datasets including sentiment analysis (NLP), anomaly detection in time-series data, and multi-class classification. Worked across the full pipeline — data cleaning, feature selection, model training, evaluation, and API deployment — building a strong foundation in applied machine learning.',
    skills: [
      'Scikit-learn',
      'NLP',
      'Sentiment Analysis',
      'Anomaly Detection',
      'FastAPI',
      'Python',
    ],
    cert: mlCert,
    certAlt: 'Machine Learning Internship Certificate — ITSOLERA PVT LTD',
  },
  {
    id: 3,
    role: 'Artificial Intelligence Intern',
    company: 'ITSOLERA PVT LTD',
    url: 'https://itsolera.com/',
    period: 'July 2024 – October 2024',
    type: 'Deep Learning Track',
    description:
      'Contributed to four team-based deep learning projects — an AI-Powered Interactive Learning Platform, a Super-Resolution Imaging system, an Augmented Reality Try-On experience, and a Smart Parking System with real-time space detection. My focus across all four was building robust data collection and preprocessing pipelines that fed directly into model training workflows.',
    skills: ['Deep Learning', 'PyTorch', 'OpenCV', 'Data Pipelines', 'YOLO', 'Python'],
    cert: aiCert,
    certAlt: 'Artificial Intelligence Internship Certificate — ITSOLERA PVT LTD',
  },
];

export const Experience = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible: transVisible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <Heading
              className={styles.sectionTitle}
              data-visible={transVisible}
              level={2}
              id={titleId}
            >
              Experience
            </Heading>
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <Fragment key={exp.id}>
                  <div
                    className={styles.entry}
                    data-visible={transVisible}
                    style={{ '--entry-index': index }}
                  >
                    <div className={styles.entryLeft}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={styles.type}>{exp.type}</span>
                    </div>
                    <div className={styles.entryLine}>
                      <div className={styles.dot} />
                      {index < experiences.length - 1 && (
                        <div className={styles.line} />
                      )}
                    </div>
                    <div className={styles.entryRight}>
                      <Heading className={styles.role} level={4}>
                        {exp.role}
                      </Heading>
                      <a
                        className={styles.company}
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {exp.company}
                      </a>
                      <span className={styles.periodMobile}>{exp.period}</span>
                      <Text className={styles.entryDescription} size="m" as="p">
                        {exp.description}
                      </Text>
                      <div className={styles.skillList}>
                        {exp.skills.map(skill => (
                          <span key={skill} className={styles.skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                      {exp.cert && (
                        <div className={styles.certWrapper}>
                          <Text className={styles.certLabel} size="s" as="p">
                            Certificate of Completion
                          </Text>
                          <a
                            href={exp.cert}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.certLink}
                            aria-label={exp.certAlt}
                          >
                            <img
                              src={exp.cert}
                              alt={exp.certAlt}
                              className={styles.certImage}
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
