import styled from 'styled-components';
import { SliceZone, asText } from '@prismicio/client';

import { SmallParagraph } from 'components/atoms/typography.styles';
import { Black010 } from 'components/styling/colors';
import QAndAItem from 'components/FAQ/molecules/QAndItem';

import { FaqTopicSlice } from 'prismicio-types';

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

interface Props {
  QAndAContents: SliceZone<FaqTopicSlice>;
}

const QAndASection = ({ QAndAContents }: Props) => (
  <Container>
    {QAndAContents.map((item, index) => (
      <div key={index}>
        <TopicHeading textColor={Black010}>{item.primary.topic_name}</TopicHeading>
        {item.items.map((topicItem, topicIndex) => (
          <QAndAItem
            key={topicIndex}
            item={{
              question: asText(topicItem.question),
              answer: asText(topicItem.answer),
            }}
            isLastItem={topicIndex === item.items.length - 1}
          />
        ))}
      </div>
    ))}
  </Container>
);

export default QAndASection;
