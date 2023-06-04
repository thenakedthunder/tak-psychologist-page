import { LargeParagraph, DefaultParagraph } from 'components/atoms/typography.styles';
import { Green100, Black050 } from 'components/styling/colors';
import styled from 'styled-components';
import { ServiceItem } from 'components/Prices/content/priceList';

const ServiceUnitWrapper = styled.div`
padding-top: 20px;

@media screen and (min-width: 992px) {
  display: grid;
  grid-template-columns: 1fr auto;
}
`;

const PriceAndOrder = styled.div`
  padding-top: 6px;
  align-items: center;

  @media screen and (min-width: 576px) {
    grid-template-columns: auto;
    row-gap: 4px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 160px 120px;
    justify-items: end;
    padding-top: 0;
  }
`;

interface ServiceUnitProps {
  unit: ServiceItem
}

const ServiceUnit = ({ unit }: ServiceUnitProps) => (
  <ServiceUnitWrapper>
    <LargeParagraph className="bold" textColor={Green100}>{unit.name}</LargeParagraph>
    <PriceAndOrder>
      <DefaultParagraph textColor={Black050}>{unit.price}</DefaultParagraph>
    </PriceAndOrder>
  </ServiceUnitWrapper>
);

export default ServiceUnit;
