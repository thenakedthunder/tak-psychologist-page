import Image, { StaticImageData } from 'next/legacy/image';
import styled from 'styled-components';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';

const Container = styled.div`
  max-width: 580px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 30px auto;
  }
`;

const Caption = styled(SmallParagraph)`
  text-align: center;
  padding: 12px 0 30px;
`;

interface Props {
  imageSource: StaticImageData;
  caption: string;
}

const ArticleImage = ({ imageSource, caption }: Props) => (
  <Container>
    <Image src={imageSource} alt={caption} />
    <Caption textColor={Green050} dangerouslySetInnerHTML={{ __html: caption }} />
  </Container>
);

export default ArticleImage;
