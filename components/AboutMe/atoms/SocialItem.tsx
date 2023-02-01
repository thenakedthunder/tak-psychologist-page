import styled from 'styled-components';
import { TfiPlus } from 'react-icons/tfi';

import { Green050 } from 'components/styling/colors';
import { SmallParagraph } from 'components/atoms/typography.styles';

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  align-items: center;
`;

interface SocialItemProps {
  linkText: string;
}

const SocialItem = ({ linkText }: SocialItemProps) => (
  <ItemContainer>
    <TfiPlus size={16} color={Green050} />
    <SmallParagraph color={Green050}>
      {linkText}
    </SmallParagraph>
  </ItemContainer>
);

export default SocialItem;
