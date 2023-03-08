import styled from 'styled-components';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Blue050 } from 'components/styling/colors';
import QAndAContents from 'components/FAQ/content/QAndAContents';
import QAndAItem from 'components/FAQ/molecules/QAndItem';

const Container = styled.div`
  grid-area: content;
`;

const TopicHeading = styled(SmallParagraph)`
  font-weight: 700; 
  text-transform: uppercase;
  padding: 30px 0 28px;

  @media screen and (min-width: 1200px) {
    padding-top: 60px; 
  }
`;

const QAndASection = () => (
  <Container>
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
  </Container>
);

export default QAndASection;
