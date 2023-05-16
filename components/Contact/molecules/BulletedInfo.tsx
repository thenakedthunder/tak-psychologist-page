import styled from 'styled-components';

import { reservationInfoContent } from 'components/Contact/content/contactContent';
import BulletedInfoItem from 'components/molecules/BulletedInfoItem';
import { Green010, Green050 } from 'components/styling/colors';

const BulletedInfoContainer = styled.div`
  padding: 30px 0 40px;
  display: grid;
  row-gap: 30px;

  @media screen and (min-width: 1200px) {
    row-gap: 20px;
  }
`;

const BulletedInfo = () => (
  <BulletedInfoContainer>
    {reservationInfoContent.listedParagraphs.map((item, index) => (
      <BulletedInfoItem key={index} bulletPointColor={Green010} textColor={Green050}>
        {item}
      </BulletedInfoItem>
    ))}
  </BulletedInfoContainer>
);

export default BulletedInfo;
