import styled from 'styled-components';
import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5';
import { useState } from 'react';

import { Green050, Green100, Grey050 } from 'components/styling/colors';
import { DefaultParagraph, LargeParagraph } from 'components/atoms/typography.styles';

const QuestionHeader = styled.div`
  display: grid;
  grid-template-columns: auto 28px;
  column-gap: 28px;
  padding-bottom: 20px;
`;

const DividerLine = styled.div`
  height: 1px;
  background-color: ${Grey050};
  margin: 40px 0 30px;
`;

interface Props {
  item: {
    question: string;
    answer: string;
  };
  isLastItem: boolean;
}

const QAndAItem = ({ item, isLastItem }: Props) => 
{
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <QuestionHeader>
        <LargeParagraph color={Green100}>{item.question}</LargeParagraph>
        <div onClick={toggleIsOpen}>
          {isOpen 
            ? <IoChevronUpCircleOutline size={28} />
            : <IoChevronDownCircleOutline size={28} />}
        </div>
      </QuestionHeader>
      { isOpen && <DefaultParagraph color={Green050}>{item.answer}</DefaultParagraph> }
      {!isLastItem && <DividerLine />}
    </div>
  );
}
  
export default QAndAItem;
