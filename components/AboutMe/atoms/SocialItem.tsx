import styled from 'styled-components';
import { TfiPlus } from 'react-icons/tfi';

import { Green050 } from 'components/styling/colors';
import { SmallParagraph } from 'components/atoms/typography.styles';

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 12px auto;
  align-items: center;
  column-gap: 4px;

  @media screen and (min-width: 768px) {
    column-gap: 16px;
  }
`;

interface SocialItemProps {
  linkText: string;
}

const SocialItem = ({ linkText }: SocialItemProps) => (
  <ItemContainer>
    <TfiPlus size={12} color={Green050} />
    <SmallParagraph color={Green050}>
      {linkText}
    </SmallParagraph>
  </ItemContainer>
);

export default SocialItem;
