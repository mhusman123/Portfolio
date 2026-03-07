import storeTexture from '~/assets/store.png';
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
import styles from './primebrothers.module.css';

const title = 'PrimeBrothers E-Commerce Platform';
const description =
  'A full-stack e-commerce platform with a React storefront, Node.js/Express REST API, MongoDB database, and sandbox payment testing via PayFast — built for a local Pakistani retail brand. JazzCash & EasyPaisa integration coming soon.';
const roles = ['Full-Stack Development', 'React Frontend', 'Node.js / Express', 'PayFast Sandbox Testing'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const PrimeBrothers = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.primebrothers}>
        <ProjectHeader
          title={title}
          description={description}
          url="https://primebrothers-store.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={storeTexture}
              width={1280}
              height={800}
              alt="PrimeBrothers e-commerce storefront screenshot"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Overview</ProjectSectionHeading>
            <ProjectSectionText>
              PrimeBrothers is a fully functional e-commerce platform built for a local
              retail brand. The platform was built from scratch — covering product
              catalogue, cart management, user authentication, order processing, and
              payment handling. The goal was a clean, fast shopping experience that
              works reliably on both desktop and mobile.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Frontend</ProjectSectionHeading>
              <ProjectSectionText>
                Built with <strong>React</strong>, the storefront features a product
                catalogue with filtering and search, a persistent shopping cart, and a
                smooth checkout flow. State is managed with React Context and persisted
                to localStorage so the cart survives page refreshes. The UI is fully
                responsive across mobile and desktop breakpoints.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Backend & Database</ProjectSectionHeading>
              <ProjectSectionText>
                The <strong>Node.js / Express</strong> REST API handles product listings,
                user accounts, order management, and payment callbacks. User passwords are
                hashed with <strong>bcrypt</strong> and sessions are managed with
                <strong> JWT tokens</strong>. Product and order data is stored in
                <strong> MongoDB</strong> via Mongoose schemas.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Payment Integration</ProjectSectionHeading>
            <ProjectSectionText>
              The current test build uses the <strong>PayFast sandbox</strong> to
              simulate end-to-end checkout flows with fake transactions — allowing
              the full payment lifecycle (initiation, ITN webhook callback, and order
              confirmation) to be verified without real money. Signature validation
              is in place to prevent request tampering even in sandbox mode.
            </ProjectSectionText>
            <ProjectSectionText>
              <strong>JazzCash</strong> and <strong>EasyPaisa</strong> — Pakistan&apos;s
              most widely used mobile payment platforms — are planned for the
              production release and are currently <strong>coming soon</strong>.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              React · Node.js · Express · MongoDB · Mongoose · JWT · bcrypt ·
              PayFast Sandbox · Vercel (frontend) · Railway (backend)
              · JazzCash / EasyPaisa (coming soon)
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
