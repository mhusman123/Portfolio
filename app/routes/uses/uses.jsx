import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of tools, libraries, hardware, and software I use for ML, AI, and data science work',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, libraries, frameworks, and platforms I use daily for machine learning, AI development, and data science work."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>ML &amp; AI Frameworks</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://pytorch.org/">PyTorch</Link> is my go-to deep
                    learning framework for building and training neural networks — I use it
                    for NLP models, classification tasks, and custom architectures.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">TensorFlow / Keras</Link> for
                    rapid prototyping and deploying production-ready models, especially for
                    image and text classification pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://scikit-learn.org/">Scikit-learn</Link> is my
                    standard toolkit for classical ML — random forests, SVMs, logistic
                    regression, clustering, and preprocessing pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://xgboost.readthedocs.io/">XGBoost</Link> for
                    gradient boosting on tabular data, particularly useful in financial
                    risk forecasting and disease prediction models.
                  </ListItem>
                  <ListItem>
                    <Link href="https://huggingface.co/">HuggingFace Transformers</Link>{' '}
                    for fine-tuning pre-trained language models on domain-specific NLP
                    tasks such as summarisation and sentiment analysis.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Science &amp; Visualisation</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://pandas.pydata.org/">Pandas</Link> and{' '}
                    <Link href="https://numpy.org/">NumPy</Link> form the backbone of every
                    data pipeline I build — from cleaning and transforming raw datasets to
                    feature engineering at scale.
                  </ListItem>
                  <ListItem>
                    <Link href="https://matplotlib.org/">Matplotlib</Link> and{' '}
                    <Link href="https://seaborn.pydata.org/">Seaborn</Link> for
                    exploratory data analysis, statistical plots, and presenting insights
                    in research papers and reports.
                  </ListItem>
                  <ListItem>
                    <Link href="https://plotly.com/">Plotly</Link> and{' '}
                    <Link href="https://streamlit.io/">Streamlit</Link> for building
                    interactive dashboards and deploying data apps quickly — my career
                    aspirations predictor is live on Streamlit Cloud.
                  </ListItem>
                  <ListItem>
                    Power BI and Tableau for business intelligence reporting and
                    creating executive-level dashboards from structured datasets.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development &amp; APIs</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">VS Code</Link> is my
                    primary editor. I rely heavily on the Python, Pylance, Jupyter, and
                    GitLens extensions for day-to-day ML development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://jupyter.org/">Jupyter Notebooks</Link> for
                    iterative experimentation, EDA, and sharing reproducible research
                    — every ML project starts in a notebook before moving to a module
                    structure.
                  </ListItem>
                  <ListItem>
                    <Link href="https://fastapi.tiangolo.com/">FastAPI</Link> is my
                    preferred framework for wrapping ML models into production REST APIs
                    — fast, async-friendly, and auto-generates OpenAPI docs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://flask.palletsprojects.com/">Flask</Link> and{' '}
                    <Link href="https://www.djangoproject.com/">Django</Link> for
                    lightweight APIs and full-stack web apps respectively, including the
                    document summariser backend.
                  </ListItem>
                  <ListItem>
                    Git and GitHub for version control, collaborative development,
                    and CI/CD pipelines across all projects.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Currently Exploring</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://en.wikipedia.org/wiki/Computer_vision">Computer Vision</Link>{' '}
                    with OpenCV, YOLO, and CNN-based architectures for object detection,
                    image segmentation, and super-resolution — building on the deep learning
                    work from my third internship.
                  </ListItem>
                  <ListItem>
                    <Link href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation">Retrieval-Augmented Generation (RAG)</Link>{' '}
                    systems that pair large language models with vector stores (FAISS,
                    Pinecone) to build context-aware, knowledge-grounded AI applications.
                  </ListItem>
                  <ListItem>
                    LLM fine-tuning using{' '}
                    <Link href="https://huggingface.co/docs/peft">HuggingFace PEFT / LoRA</Link>{' '}
                    to adapt foundation models to domain-specific tasks efficiently and
                    at low cost.
                  </ListItem>
                  <ListItem>
                    Advanced Deep Learning — Transformers, diffusion models, and
                    multi-modal architectures — through hands-on projects and the
                    fast.ai and DeepLearning.AI curriculum.
                  </ListItem>
                  <ListItem>
                    MLOps practices: experiment tracking with{' '}
                    <Link href="https://mlflow.org/">MLflow</Link>, containerisation with
                    Docker, and CI/CD pipelines to move models from notebook to production
                    reliably and reproducibly.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Languages &amp; Stack</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Primary Language</TableHeadCell>
                    <TableCell>Python</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Other Languages</TableHeadCell>
                    <TableCell>SQL, Java, JavaScript, React, Node.js</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Relational Databases</TableHeadCell>
                    <TableCell>MySQL, PostgreSQL, SQLite</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>NoSQL</TableHeadCell>
                    <TableCell>MongoDB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud</TableHeadCell>
                    <TableCell>AWS, Azure (fundamentals)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Education</TableHeadCell>
                    <TableCell>BSc Computer Science — University of Sindh (Dec 2025)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Experience</TableHeadCell>
                    <TableCell>3x Intern (ML, Data Science, AI/DL) at <Link href="https://itsolera.com/">ITSOLERA PVT LTD</Link></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>Windows 11</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
