import styled from 'styled-components';

import { ContentBlock } from 'components/Blog/content/exampleArticle';
import {
  H2, H3, DefaultParagraph, LargeParagraph,
} from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import ArticleImage from 'components/Blog/molecules/ArticleImage';
import Quote from 'components/Blog/organisms/Quote';
import { StaticImageData } from 'next/image';

interface Props {
  blocks: ContentBlock[];
}

const Container = styled.div`
  ${H3},
  ${LargeParagraph},
  ${DefaultParagraph},
  ${H2} {
    padding-bottom: 30px;
  }
`;

const DefaultParagraphWithStyledHighlighting = styled(DefaultParagraph)`
  .highlighted {
    font-weight: 700;
    text-decoration: underline;
  }
`;

const ArticleContent = ({ blocks }: Props) => (
  <Container>
    {blocks.map((block, index) => {
      switch (block.type) {
        case 'heading':
          return <H3 key={index} color={Green050}>{block.content as string}</H3>;
        case 'paragraph':
          return (
            <DefaultParagraphWithStyledHighlighting
              key={index}
              color={Green050}
              dangerouslySetInnerHTML={{ __html: block.content as string }}
            />
          );
        case 'largeParagraph':
          return (
            <LargeParagraph key={index} color={Green100}>
              {block.content as string}
            </LargeParagraph>
          );
        case 'image':
          return (
            <ArticleImage
              key={index}
              imageSource={block.content as StaticImageData}
              caption={block.caption}
            />
          );
        case 'quote':
          return <Quote key={index} content={block.content as string} />;
        default:
          throw new Error('could not recognize the input content type');
      }
    })}
  </Container>
);

export default ArticleContent;
