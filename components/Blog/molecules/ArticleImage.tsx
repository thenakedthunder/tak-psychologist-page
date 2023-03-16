import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';

const ArticleImageWrapper = styled.div`
  padding-bottom: 0 !important;
`;

const Caption = styled(SmallParagraph)`
  text-align: center;
  padding: 12px 0 30px;
`;

interface Props {
  imageSource: StaticImageData;
}

const ArticleImage = ({ imageSource }: Props) => (
  <ArticleImageWrapper>
    <Image src={imageSource} />
    <Caption color={Green050}>
      <span className="bold">A balosi lagúna.</span>
      A fényképet Radványi Zsófia készítette.
    </Caption>
  </ArticleImageWrapper>
);

export default ArticleImage;
