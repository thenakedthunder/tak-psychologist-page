import styled from 'styled-components';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

import PsychoLink from 'components/atoms/PsychoLink';
import { Green050 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const LinkContainer = styled.div`
  padding: 8px 0 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4px;

  svg {
    position: relative;
    bottom: 4px;
  }
`;

const ReadOnLink = () => (
  <LinkContainer>
    <PsychoLink href="">
      <DefaultParagraph color={Green050}>Tovább</DefaultParagraph>
    </PsychoLink>
    <IoChevronDownCircleOutline size={28} color={Green050} />
  </LinkContainer>
);

export default ReadOnLink;