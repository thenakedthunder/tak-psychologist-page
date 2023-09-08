import styled from 'styled-components';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';

import { H2 } from 'components/atoms/typography.styles';
import { Green010, Green100 } from 'components/styling/colors';
import Collage from 'components/FAQ/molecules/Collage';
import QAndASection from 'components/FAQ/organisms/QAndASection';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';

import { FaqPageDocument } from 'prismicio-types';

const FAQMainContainer = styled.div`
  padding: 40px;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas:
    ". header"
    "collage ."
    "collage content";
    grid-template-columns: 520px auto;
    column-gap: 120px;
    max-width: 1440px;
  }

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
    margin: 0 auto;
    grid-template-columns: 440px auto;
  }
`;

const Header = styled(H2)`
  grid-area: header;
`;

interface FAQProps {
  page: FaqPageDocument;
}

export default function FAQ({ page }: FAQProps) {
  return (
    <BackgroundWrapper backgroundColor={Green010}>
      <FAQMainContainer>
        <Header textColor={Green100}>
          {page.data.page_title}
        </Header>
        <Collage faqImage={page.data.faq_page_image} />
        <QAndASection
          QAndAContents={page.data.slices}
        />
      </FAQMainContainer>
    </BackgroundWrapper>
  );
}

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getByUID('faq_page', 'faq-page');

  return {
    props: { page },
  };
}
