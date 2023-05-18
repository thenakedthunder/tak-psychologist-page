import ImageSlider from 'components/Contact/molecules/ImageSlider';
import ContactFooter from 'components/Contact/organisms/ContactFooter';
import SubHeader from 'components/Contact/atoms/SubHeader';
import { Green050 } from 'components/styling/colors';

const RightSide = () => (
  <div>
    <SubHeader textColor={Green050}>
      A konzultációk helyszíne
    </SubHeader>
    <ImageSlider />
    <ContactFooter />
  </div>
);

export default RightSide;
