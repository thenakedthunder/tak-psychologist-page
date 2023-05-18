import SubHeader from 'components/Contact/atoms/SubHeader';
import { Green050 } from 'components/styling/colors';
import { reservationInfoContent } from 'components/Contact/content/contactContent';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import BulletedInfo from 'components/Contact/molecules/BulletedInfo';

const ReservationInfo = () => (
  <div>
    <SubHeader textColor={Green050}>
      Bejelentkezési információk
    </SubHeader>
    {
      reservationInfoContent.highlightedParagraphs.map((item, index) => (
        <DefaultParagraph key={index} textColor={Green050}>
          {item}
        </DefaultParagraph>
      ))
    }
    <BulletedInfo />
  </div>
);

export default ReservationInfo;
