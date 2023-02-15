import styled from 'styled-components';

import { DefaultParagraph, H3, SmallParagraph } from 'components/atoms/typography.styles';
import { Green050, Green100 } from 'components/styling/colors';
import { ListType } from 'components/AboutMe/content/aboutMeContent';


const ListItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  padding-top: 20px;
`;

const Title = styled(DefaultParagraph)`
  font-weight: 700;
  padding: 10px 0 6px;
`;

const ListMoreDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4px;
`;

interface ListProps {
  content: ListType;
}

const List = ({ content }: ListProps) => (
  <>
    <H3 color={Green050}>{content.header}</H3>
    <ListItemsContainer>
      {content.items.map((item, index) => (
        <div key={index}>
          <SmallParagraph color={Green100}>{item.date}</SmallParagraph>
          <Title color={Green100}>{item.title}</Title>
          <ListMoreDetails>
            {item.otherDetails?.map((detailItem, detailIndex) => (
              <DefaultParagraph color={Green100} key={detailIndex}>{detailItem}</DefaultParagraph>
            ))}
          </ListMoreDetails>
        </div>
      ))}
    </ListItemsContainer>
  </>
);

export default List;
