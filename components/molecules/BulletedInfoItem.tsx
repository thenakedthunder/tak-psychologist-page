import styled from 'styled-components';

import BulletPoint from 'components/atoms/BulletPoint';
import { SmallParagraph } from 'components/atoms/typography.styles';

const BulletedInfoItemStyled = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 16px;
`;

interface BulletedInfoItemProps {
  bulletPointColor: string;
  textColor: string;
  children: string;
}

const BulletedInfoItem = ({ bulletPointColor, textColor, children }: BulletedInfoItemProps) => (
  <BulletedInfoItemStyled>
    <BulletPoint color={bulletPointColor} />
    <SmallParagraph textColor={textColor}>
      {children}
    </SmallParagraph>
  </BulletedInfoItemStyled>
);

export default BulletedInfoItem;
