import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m <strong>Muhammad Usman</strong> — a fresh{' '}
      <strong>Machine Learning Engineer</strong> and <strong>AI Engineer</strong>{' '}
      who graduated with a Bachelor of Science in Computer Science from the{' '}
      <strong>University of Sindh, Jamshoro</strong> in February 2026. During my
      degree and three back-to-back internships at{' '}
      <Link href="https://itsolera.com/">ITSOLERA PVT LTD</Link>, I gained
      hands-on experience designing, training, and deploying intelligent systems —
      from classical ML pipelines to deep learning models and LLM-powered
      applications. Take a look at the tools I work with on my{' '}
      <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Core stack:</strong> Python is my primary language across the full ML
      lifecycle. I build and train models with <strong>Scikit-learn</strong>,{' '}
      <strong>TensorFlow / Keras</strong>, and <strong>PyTorch</strong>, serve them
      as REST APIs using <strong>FastAPI</strong> and Flask, and package everything
      with <strong>Docker</strong>. For data analysis and visualisation I rely on
      Pandas, NumPy, Matplotlib, Seaborn, and Plotly. I track experiments with{' '}
      <strong>MLflow</strong>, manage environments with Conda, and keep all work
      version-controlled with Git. I am actively expanding my cloud skills on{' '}
      <strong>AWS</strong> (EC2, S3, Lambda, SageMaker).
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>What I specialise in:</strong> Supervised &amp; unsupervised learning,
      Natural Language Processing, Computer Vision, Time-Series forecasting,
      end-to-end MLOps pipelines, and REST API development for ML products. I enjoy
      bridging the gap between research-quality models and production-ready systems
      that genuinely help people.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Currently learning:</strong> Fine-tuning{' '}
      <strong>Large Language Models</strong> with HuggingFace PEFT / LoRA, building{' '}
      <Link href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">
        Retrieval-Augmented Generation (RAG)
      </Link>{' '}
      pipelines with FAISS and Pinecone, and integrating LLM APIs (Gemini, Groq)
      into real applications. On the infrastructure side I am deepening my knowledge
      of <strong>AWS SageMaker</strong> for managed training and deployment, setting
      up CI/CD pipelines for ML with GitHub Actions and Docker Compose, and
      exploring real-time <strong>Computer Vision</strong> with YOLO and OpenCV.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/static/ML Resume.pdf"
                icon="arrow-right"
                download="Muhammad_Usman_Resume.pdf"
                target="_blank"
              >
                View / Download Resume
              </Button>
            </div>
            <div className={styles.column}>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
