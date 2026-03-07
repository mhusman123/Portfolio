import summarizerTexture from '~/assets/summarizer.png';
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
import styles from './summarizer.module.css';

const title = 'Intelligent Document Summarizer API';
const description =
  'An AI-powered REST API that summarizes PDF, DOCX, and TXT documents, extracts keywords, and answers natural language questions — backed by Groq LLaMA 3.3 70B with an offline transformer fallback.';
const roles = ['API Design', 'NLP Engineering', 'Python / FastAPI', 'Deployment (Railway)'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Summarizer = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.summarizer}>
        <ProjectHeader
          title={title}
          description={description}
          url="https://web-production-4811b.up.railway.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={summarizerTexture}
              width={1280}
              height={800}
              alt="Intelligent Document Summarizer API interface screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview</ProjectSectionHeading>
            <ProjectSectionText>
              A production-ready REST API that accepts uploaded documents in PDF, DOCX, or
              plain-text format and returns concise abstractive summaries, ranked keyword
              lists, and answers to natural language questions about the document content.
              The system is designed for high availability — when Groq&apos;s cloud API is
              unreachable, it falls back automatically to a locally hosted HuggingFace
              transformer model.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Summarisation Pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                Documents are first parsed with <strong>PyMuPDF</strong> (PDF) or
                <strong> python-docx</strong> (DOCX), then chunked into context windows
                appropriate for the model. The <strong>Groq LLaMA 3.3 70B</strong> model
                is prompted to produce abstractive summaries — condensing meaning rather
                than extracting sentences verbatim — with configurable output length.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Keyword Extraction & QA</ProjectSectionHeading>
              <ProjectSectionText>
                Keywords are ranked using a <strong>TF-IDF</strong> scoring approach,
                surfacing the most distinctive terms in each document. The
                question-answering endpoint passes the user&apos;s query alongside the full
                document context to the LLM, grounding answers in actual content and
                preventing hallucination.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Offline Fallback</ProjectSectionHeading>
            <ProjectSectionText>
              When the Groq API is unavailable, the system automatically switches to a
              local <strong>HuggingFace transformer model</strong> for summarisation,
              ensuring the API remains functional without external dependencies. This
              dual-mode design makes the service resilient for production use.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              Python · FastAPI · Groq LLaMA 3.3 70B · HuggingFace Transformers ·
              PyMuPDF · python-docx · TF-IDF · Railway
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
