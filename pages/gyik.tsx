import styled from 'styled-components';
import Image from 'next/image';

import NavBar from 'components/NavBar/organisms/NavBar';
import {
  H2, SmallParagraph,
} from 'components/atoms/typography.styles';
import {
  Blue050, Green010, Green100, Grey010,
} from 'components/styling/colors';
import FaqImage from 'public/assets/gyik.png';
import QAndAContents from 'components/FAQ/content/QAndAContents';
import QAndAItem from 'components/FAQ/organisms/QAndItem';

const MainContainer = styled.div`
  padding: 40px;
  background-color: ${Green010};
`;

const CollageContainer = styled.div`
  margin: 30px 0 30px -40px;
`;

const LargerSquare = styled.div`
  height: 246px;
  width: 246px;
  background-color: ${Grey010};
`;

const SmallerSquare = styled.div`
  height: 148px;
  width: 148px;
  background-color: ${Green100};
  position: relative;
  top: 124px;
`;

const ImageContainer = styled.div`
  width: 272px;
  height: 160px;
  position: relative;
  left: 64px;
  bottom: 113px;

  /* width: 480px;
  height: 312px; */
`;

const QAndASection = styled.div`

`;

const TopicHeading = styled(SmallParagraph)`
  font-weight: 700; 
  text-transform: uppercase;
  padding: 30px 0 28px;
`;

export default function FAQ() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>
          Gyakran Ismételt Kérdések
        </H2>
        <CollageContainer>
          <LargerSquare>
            <SmallerSquare />
            <ImageContainer>
              <Image src={FaqImage} objectFit="contain" />
            </ImageContainer>
          </LargerSquare>
        </CollageContainer>
        <QAndASection>
          {QAndAContents.map((item, index) => (
            <div key={index}>
              <TopicHeading color={Blue050}>{item.name}</TopicHeading>
              {item.topicContent.map((topicItem, topicIndex) => (
                <QAndAItem
                  key={topicIndex}
                  item={topicItem}
                  isLastItem={topicIndex === item.topicContent.length - 1}
                />
              ))}
            </div>
          ))}
        </QAndASection>
      </MainContainer>
    </>
  );
}
