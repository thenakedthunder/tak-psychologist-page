import { IoChevronUpCircleOutline, IoChevronDownCircleOutline } from 'react-icons/io5';
import { useState } from 'react';
import AnimateHeight, { Height } from 'react-animate-height';

import { Green050, Green100 } from 'components/styling/colors';
import { LargeParagraph } from 'components/atoms/typography.styles';
import {
  QuestionHeader,
  DividerLine,
  DefaultParagraphWithTopPadding,
  OpenToggle,
} from 'components/FAQ/molecules/QAndItem.styles';

interface Props {
  item: {
    question: string;
    answer: string;
  };
  isLastItem: boolean;
}

const QAndAItem = ({ item, isLastItem }: Props) => {
  const [height, setHeight] = useState<Height>(0);
  const toggleIsOpen = () => setHeight(height === 0 ? 'auto' : 0);

  return (
    <div>
      <QuestionHeader>
        <LargeParagraph color={Green100}>{item.question}</LargeParagraph>
        <OpenToggle
          onClick={toggleIsOpen}
          onKeyPress={toggleIsOpen}
          role="button"
          tabIndex={0}
          aria-expanded={height !== 0}
          aria-controls="example-panel"
        >
          {height !== 0
            ? <IoChevronUpCircleOutline size={28} />
            : <IoChevronDownCircleOutline size={28} />}
        </OpenToggle>
      </QuestionHeader>
      <AnimateHeight
        duration={500}
        height={height}
      >
        <DefaultParagraphWithTopPadding color={Green050}>
          {item.answer}
        </DefaultParagraphWithTopPadding>
      </AnimateHeight>
      {!isLastItem && <DividerLine />}
    </div>
  );
};

export default QAndAItem;
