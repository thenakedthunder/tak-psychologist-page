import styled from 'styled-components';
import { asText } from '@prismicio/client';

import BulletedInfoItem from 'components/molecules/BulletedInfoItem';
import { Green010, Green050 } from 'components/styling/colors';
import { BulletPointsSlice } from 'prismicio-types';

const BulletedInfoContainer = styled.div`
  padding: 30px 0 40px;
  display: grid;
  row-gap: 30px;

  @media screen and (min-width: 1200px) {
    row-gap: 20px;
  }
`;

interface BulletedInfoProps {
  points: BulletPointsSlice[];
}

const BulletedInfo = ({ points }: BulletedInfoProps) => (
  <BulletedInfoContainer>
    {points[0].items.map((item, index) => (
      <BulletedInfoItem key={index} bulletPointColor={Green010} textColor={Green050}>
        {asText(item.point)}
      </BulletedInfoItem>
    ))}
  </BulletedInfoContainer>
);

export default BulletedInfo;
