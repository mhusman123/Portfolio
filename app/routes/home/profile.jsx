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
      I'm Muhammad Usman, a Machine Learning Engineer and AI Developer with hands-on
      experience building, training, and deploying intelligent systems. I specialise in
      Python, Scikit-learn, TensorFlow, and PyTorch — turning raw data into production-ready
      AI solutions. I graduated with a Bachelor of Computer Science from the University of
      Sindh in December 2025.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I have completed three internships at{' '}
      <Link href="https://itsolera.com/">ITSOLERA PVT LTD</Link> across Machine Learning,
      Data Science, and Artificial Intelligence. My first two internships focused on
      building models for sentiment analysis, disease prediction, anomaly detection, and
      financial risk forecasting, and wrapping those models in production APIs using FastAPI
      and Flask. My third internship (July – October 2024) concentrated on Deep Learning —
      as part of a team I contributed data collection and preprocessing pipelines to four
      projects: an AI-Powered Interactive Learning Platform, a Super-Resolution Imaging
      system, an Augmented Reality Try-On experience, and a Smart Parking System with
      real-time space detection. Balancing all three internships alongside university studies
      sharpened my time management and collaborative problem-solving skills. Check out the
      tools I work with on my <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Beyond production work, I am actively deepening my expertise in several cutting-edge
      areas of AI. I am currently building projects with{' '}
      <Link href="https://pytorch.org/">Deep Learning</Link> architectures — CNNs, RNNs,
      and Transformers — and exploring{' '}
      <Link href="https://en.wikipedia.org/wiki/Computer_vision">Computer Vision</Link>{' '}
      pipelines for object detection, image segmentation, and super-resolution using
      OpenCV and YOLO. I am also working with{' '}
      <Link href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">Retrieval-Augmented Generation (RAG)</Link>{' '}
      systems, combining large language models with vector databases such as FAISS and
      Pinecone to build context-aware AI applications. Additionally, I am experimenting
      with LLM fine-tuning via HuggingFace PEFT/LoRA and developing end-to-end MLOps
      pipelines using tools like MLflow and Docker to bring models from experiment to
      production reliably.
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
            </div>
            <div className={styles.column}>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
