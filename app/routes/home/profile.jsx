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
      I&apos;m Muhammad Usman — a <strong>Machine Learning Engineer</strong>,{' '}
      <strong>AI Engineer</strong>, and <strong>Data Scientist</strong> with a
      Bachelor of Computer Science from the University of Sindh (February 2026).
      I design, train, and deploy intelligent systems that solve real-world problems
      — from classical ML pipelines to deep learning architectures and LLM-powered
      applications. Check out the tools I use daily on my{' '}
      <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Core skills &amp; stack:</strong> Python is my primary language across
      every stage of the ML lifecycle. For model development I work with{' '}
      <strong>Scikit-learn</strong>, <strong>TensorFlow / Keras</strong>, and{' '}
      <strong>PyTorch</strong>. I serve models and build data-driven REST APIs with{' '}
      <strong>FastAPI</strong> and Flask, containerise everything with{' '}
      <strong>Docker</strong>, and am actively learning cloud deployment on{' '}
      <strong>AWS</strong> (EC2, S3, Lambda, SageMaker). For data work I use Pandas,
      NumPy, Matplotlib, Seaborn, and Plotly. I version experiments with{' '}
      <strong>MLflow</strong>, manage environments with Conda and Poetry, and use
      Git for all source control.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Fields I specialise in:</strong> Supervised &amp; unsupervised learning,
      Natural Language Processing, Computer Vision, Time-Series forecasting,
      end-to-end MLOps pipelines, and REST API development for ML products. I enjoy
      bridging the gap between research-quality models and production-grade systems.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>What I&apos;m learning next:</strong> I am currently going deeper on{' '}
      <strong>Large Language Models</strong> — fine-tuning with HuggingFace PEFT /
      LoRA, building{' '}
      <Link href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">
        Retrieval-Augmented Generation (RAG)
      </Link>{' '}
      systems with FAISS and Pinecone, and integrating LLM APIs (Gemini, Groq) into
      production applications. On the infrastructure side I am expanding into{' '}
      <strong>AWS SageMaker</strong> for managed model training and deployment, and
      building automated CI/CD pipelines for ML using GitHub Actions and Docker
      Compose. I am also exploring <strong>Computer Vision</strong> with YOLO and
      OpenCV for real-time detection tasks.
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
