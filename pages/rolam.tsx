import styled from 'styled-components';
import { TfiPlus } from 'react-icons/tfi';

import NavBar from 'components/NavBar/organisms/NavBar';
import { H2, SmallParagraph } from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';

const MainContainer = styled.div`
  padding: 40px;
`;

const SocialDiv = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: auto;
    padding-top: 30px;
  }
`;

const SocialItem = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  align-items: center;
`;

const PlusIconContainer = styled.div`
  /* padding-right: 4px; */
`;

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <H2 color={Green100}>Rólam</H2>
        <SocialDiv>
          <SocialItem>
            <PlusIconContainer>
              <TfiPlus size={16} color={Green050} />
            </PlusIconContainer>
            <SmallParagraph color={Green050}>
              Facebook
            </SmallParagraph>
          </SocialItem>
          <SocialItem>
            <PlusIconContainer>
              <TfiPlus size={16} color={Green050} />
            </PlusIconContainer>
            <SmallParagraph color={Green050}>
              Instagram
            </SmallParagraph>
          </SocialItem>
          <SocialItem>
            <PlusIconContainer>
              <TfiPlus size={16} color={Green050} />
            </PlusIconContainer>
            <SmallParagraph color={Green050}>
              LinkedIn
            </SmallParagraph>
          </SocialItem>
          <SocialItem>
            <PlusIconContainer>
              <TfiPlus size={16} color={Green050} />
            </PlusIconContainer>
            <SmallParagraph color={Green050}>
              Youtube
            </SmallParagraph>
          </SocialItem>
        </SocialDiv>
      </MainContainer>
    </>
  );
}
