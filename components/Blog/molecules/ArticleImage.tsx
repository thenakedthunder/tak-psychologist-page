import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Green050 } from 'components/styling/colors';

const Caption = styled(SmallParagraph)`
  text-align: center;
  padding: 12px 0 30px;
`;

interface Props {
  imageSource: StaticImageData;
  caption: string;
}

const ArticleImage = ({ imageSource, caption }: Props) => (
  <>
    <Image src={imageSource} />
    <Caption color={Green050} dangerouslySetInnerHTML={{ __html: caption }} />
  </>
);

export default ArticleImage;
