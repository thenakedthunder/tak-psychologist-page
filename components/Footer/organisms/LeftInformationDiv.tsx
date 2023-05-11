import styled from 'styled-components';

import { LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import BulletedInfoItem from 'components/molecules/BulletedInfoItem';
import { Green050, Green100 } from 'components/styling/colors';
import SignatureWithProfile from 'components/Footer/molecules/SignatureWithProfile';
import { FooterContents } from 'components/Footer/content/footerContents';

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

interface LeftInformationDivProps {
  content: FooterContents;
}

const LeftInformationDiv = ({ content }: LeftInformationDivProps) => (
  <LeftInformationContainer>
    {content.texts.map(
      (item) => {
        switch (item.type) {
          case 'highlightedText':
            return (
              <LargeParagraph>{item.texts}</LargeParagraph>
            );

          case 'paragraph':
            return (
              <LeftInfoDefaultParagraph>{item.texts}</LeftInfoDefaultParagraph>
            );

          case 'bulletPoints':
            return (
              <BulletPointsContainer>
                {item.texts.map(
                  (bulletPoint) => (
                    <BulletedInfoItem bulletPointColor={Green050} textColor={Green100}>
                      {bulletPoint}
                    </BulletedInfoItem>
                  ),
                )}
              </BulletPointsContainer>
            );

          default: throw new Error('could not recognize the input content type');
        }
      },
    )}

    <SignatureWithProfile name={content.name} title={content.professionalTitle} />
  </LeftInformationContainer>
);

export default LeftInformationDiv;
