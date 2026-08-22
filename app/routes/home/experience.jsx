import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Button } from '~/components/button';
import { Fragment, useState } from 'react';
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
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertModal = cert => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

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
              Work Experience &amp; Internships
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
                      <div className={styles.roleHeader}>
                        <Heading className={styles.role} level={4}>
                          {exp.role}
                        </Heading>
                        <span className={styles.verifiedBadge}>
                          ✓ Verified Track
                        </span>
                      </div>
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
                          <div className={styles.certHeader}>
                            <Text className={styles.certLabel} size="s" as="p">
                              Certificate of Completion
                            </Text>
                            <button
                              type="button"
                              className={styles.zoomButton}
                              onClick={() => openCertModal(exp)}
                            >
                              🔍 View Full Size
                            </button>
                          </div>
                          <button
                            type="button"
                            className={styles.certLink}
                            onClick={() => openCertModal(exp)}
                            aria-label={`View full certificate for ${exp.role}`}
                          >
                            <img
                              src={exp.cert}
                              alt={exp.certAlt}
                              className={styles.certImage}
                            />
                          </button>
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

      {selectedCert && (
        <div
          className={styles.modalOverlay}
          onClick={closeCertModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.certAlt}
        >
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedCert.certAlt}</h3>
              <button
                className={styles.modalClose}
                onClick={closeCertModal}
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <img
                src={selectedCert.cert}
                alt={selectedCert.certAlt}
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalFooter}>
              <Button
                href={selectedCert.cert}
                target="_blank"
                download
                icon="arrow-right"
              >
                Open / Download Original
              </Button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

