import styled from 'styled-components';

import { Green010, Green050 } from 'components/styling/colors';
import { reservationInfoContent } from 'components/Contact/content/contactContent';
import { SmallParagraph } from 'components/atoms/typography.styles';

const BulletedInfoContainer = styled.div`
  padding: 30px 0 40px;
  display: grid;
  row-gap: 30px;
`;

const BulletedInfoItem = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 16px;
`;

const BulletPoint = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${Green010};
  border-radius: 50%;
`;

const BulletedInfo = () => (
  <BulletedInfoContainer>
    {reservationInfoContent.listedParagraphs.map((item, index) => (
      <BulletedInfoItem key={index}>
        <BulletPoint />
        <SmallParagraph color={Green050}>
          {item}
        </SmallParagraph>
      </BulletedInfoItem>
    ))}
  </BulletedInfoContainer>
);

export default BulletedInfo;
