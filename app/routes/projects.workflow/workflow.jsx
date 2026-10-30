import workflowTexture from '~/assets/workflow.svg';
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
import styles from './workflow.module.css';

const title = 'Cortex AI — Conversational Agent with LangGraph & Groq';
const description =
  'A stateful, multi-workspace conversational AI agent with streamed responses, persistent threads, PDF/RAG support, and MCP tools, served through a ChatGPT-style Streamlit interface.';
const roles = ['Agentic AI Engineering', 'LangGraph Orchestration', 'Streamlit UX', 'RAG & MCP Integration'];
const repositoryUrl = 'https://github.com/mhusman123/Workflow';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Workflow = () => (
  <Fragment>
    <ProjectContainer className={styles.workflow}>
      <ProjectHeader
        title={title}
        description={description}
        linkLabel="View on GitHub"
        url={repositoryUrl}
        roles={roles}
      />
      <ProjectSection padding="top">
        <ProjectSectionContent>
          <ProjectImage
            src={workflowTexture}
            width={1440}
            height={900}
            alt="Cortex AI conversational agent interface preview"
            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
          />
        </ProjectSectionContent>
      </ProjectSection>
      <ProjectSection>
        <ProjectTextRow>
          <ProjectSectionHeading>Agentic Conversation Workflow</ProjectSectionHeading>
          <ProjectSectionText>
            Cortex uses a LangGraph state graph to route each message through an explicit
            conversation workflow. Thread IDs keep separate conversations isolated while
            SQLite checkpoints preserve context across messages and sessions.
          </ProjectSectionText>
        </ProjectTextRow>
      </ProjectSection>
      <ProjectSection light>
        <ProjectSectionColumns>
          <ProjectTextRow>
            <ProjectSectionHeading>One Unified Workspace</ProjectSectionHeading>
            <ProjectSectionText>
              The Streamlit frontend brings General Chat, PDF/RAG, tools, and MCP modes
              into one interface. Users can create, rename, switch, and delete threads
              without leaving the conversation surface.
            </ProjectSectionText>
          </ProjectTextRow>
          <ProjectTextRow>
            <ProjectSectionHeading>Grounded Multimodal Input</ProjectSectionHeading>
            <ProjectSectionText>
              PDF and text attachments are bounded and added to the prompt for grounded
              answers, while local hash embeddings support retrieval without requiring a
              hosted embeddings provider. Image input is routed through a Groq vision model.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionColumns>
      </ProjectSection>
      <ProjectSection>
        <ProjectTextRow>
          <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
          <ProjectSectionText>
            Python · LangGraph · LangChain Core · Groq · Streamlit · SQLite checkpoints ·
            Local embeddings · MCP adapters · PDF extraction · LangSmith
          </ProjectSectionText>
        </ProjectTextRow>
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </Fragment>
);
