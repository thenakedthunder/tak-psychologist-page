import styled from 'styled-components';

import { LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import BulletedInfoItem from 'components/molecules/BulletedInfoItem';
import { Green050, Green100 } from 'components/styling/colors';
import SignatureWithProfile from 'components/Footer/molecules/SignatureWithProfile';

const LeftInformationContainer = styled.div`
  display: none;
  grid-area: left-information;

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const LeftInfoLargeParagraph = styled(LargeParagraph)`
  padding: 72px 0 20px;
`;

const BulletPointsContainer = styled.div`
  padding-top: 30px;
  display: grid;
  row-gap: 20px;
`;

const LeftInformationDiv = () => (
  <LeftInformationContainer>
    <LeftInfoLargeParagraph>Lorem ipsum dolor sitamet</LeftInfoLargeParagraph>
    <DefaultParagraph>
      Suspendisse neque leo, venenatis ut varius in, aliquam in nisl. Nam nisi velit,
      maximus nec augue ullamcorper, tincidunt accumsan magna.
    </DefaultParagraph>
    <BulletPointsContainer>
      <BulletedInfoItem bulletPointColor={Green050} textColor={Green100}>
        Mauris sit amet eros sapien. In nec tincidunt sapien. Sed tristique risus non
        augue elementum venenatis. Curabitur sapien arcu, ultrices non vehicula non.
      </BulletedInfoItem>
      <BulletedInfoItem bulletPointColor={Green050} textColor={Green100}>
        Pellentesque et lorem. Integer interdum cursus mi. In in est porttitor, ornare
        urna ut, dignissim dui. Pellentesque finibus tempus ligula, tincidunt tempor orci.
      </BulletedInfoItem>
    </BulletPointsContainer>
    <SignatureWithProfile />
  </LeftInformationContainer>
);

export default LeftInformationDiv;
