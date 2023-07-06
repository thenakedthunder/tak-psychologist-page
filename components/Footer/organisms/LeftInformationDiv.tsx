import styled from 'styled-components';

import { KeyTextField, SliceZone } from '@prismicio/client';
import { BulletPointsSlice, DefaultParagraphSlice, LargeParagraphSlice } from 'prismicio-types';
import { asText } from '@prismicio/helpers';

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

const LeftInfoDefaultParagraph = styled(DefaultParagraph)`
  padding-top: 20px;
`;

const BulletPointsContainer = styled.div`
  padding-top: 30px;
  display: grid;
  row-gap: 20px;
`;

export type LeftInformationContentType =
  LargeParagraphSlice | DefaultParagraphSlice | BulletPointsSlice

interface LeftInformationDivProps {
  content: SliceZone<LeftInformationContentType>;
  name: KeyTextField;
  professionalTitle: KeyTextField;
}

const LeftInformationDiv = ({ content, name, professionalTitle }: LeftInformationDivProps) => (
  <LeftInformationContainer>
    {content.map(
      (item, index) => {
        console.log(item);
        switch (item.slice_type) {
          case 'large_paragraph':
            return (
              <LargeParagraph key={index} textColor={Green100}>
                { asText(item.primary.text) }
              </LargeParagraph>
            );

          case 'default_paragraph':
            return (
              <LeftInfoDefaultParagraph key={index} textColor={Green100}>
                { asText(item.primary.text) }
              </LeftInfoDefaultParagraph>
            );

          case 'bullet_points':
            return (
              <BulletPointsContainer key={index}>
                {item.items.map(
                  (bulletPoint, itemIndex) => (
                    <BulletedInfoItem key={`${index}_${itemIndex}`} bulletPointColor={Green050} textColor={Green100}>
                      { asText(bulletPoint.point) }
                    </BulletedInfoItem>
                  ),
                )}
              </BulletPointsContainer>
            );

          default: throw new Error('could not recognize the input content type');
        }
      },
    )}

    <SignatureWithProfile name={name} title={professionalTitle} />
  </LeftInformationContainer>
);

export default LeftInformationDiv;
