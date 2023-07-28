import { asText } from '@prismicio/client';

import SubHeader from 'components/Contact/atoms/SubHeader';
import { Green050 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import BulletedInfo from 'components/Contact/molecules/BulletedInfo';
import { DefaultParagraphSlice, BulletPointsSlice } from 'prismicio-types';

interface ReservationInfoProps {
  heading: string;
  content: (DefaultParagraphSlice | BulletPointsSlice)[];
}

const destructureContentFromCMS = (slices: (DefaultParagraphSlice | BulletPointsSlice)[]) => ({
  paragraphs: slices.filter((slice) => slice.slice_type === 'default_paragraph') as DefaultParagraphSlice[],
  bulletPoints: slices.filter((slice) => slice.slice_type === 'bullet_points') as BulletPointsSlice[],
});

const ReservationInfo = ({ heading, content }: ReservationInfoProps) => {
  const { paragraphs, bulletPoints } = destructureContentFromCMS(content);

  return (
    <div>
      <SubHeader textColor={Green050}>
        {heading}
      </SubHeader>
      {
        paragraphs.map((item, index) => (
          <DefaultParagraph key={index} textColor={Green050}>
            {asText(item.primary.text)}
          </DefaultParagraph>
        ))
      }
      <BulletedInfo points={bulletPoints} />
    </div>
  );
};

export default ReservationInfo;
