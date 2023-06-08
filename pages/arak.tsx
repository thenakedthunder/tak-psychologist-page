import styled from 'styled-components';

import DividerLine from 'components/atoms/DividerLine';
import { H2, H3 } from 'components/atoms/typography.styles';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { Blue010, Green050, Green100 } from 'components/styling/colors';
import priceListContent from 'components/Prices/content/priceList';
import ServiceUnit from 'components/Prices/molecules/ServiceUnit';
import getColorWithOpacity from 'components/styling/StylingUtility';

const PricesContainer = styled.div`
  padding: 40px 40px 80px;
  max-width: 1080px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 80px 130px;
  }
`;

const PriceList = styled.div`
  padding-top: 30px;
`;

const Prices = () => (
  <BackgroundWrapper backgroundColor={getColorWithOpacity(Blue010, '80')}>
    <PricesContainer>
      <H2 textColor={Green100}>Árak</H2>
      <PriceList>
        {priceListContent.map((priceListItem, priceListIndex) => (
          <div key={priceListIndex}>
            <H3 textColor={Green050}>{priceListItem.categoryName}</H3>
            {priceListItem.services.map((serviceItem, serviceItemIndex) => (
              <ServiceUnit key={serviceItemIndex} unit={serviceItem} />
            ))}
            { priceListIndex !== priceListContent.length - 1 && <DividerLine /> }
          </div>
        ))}
      </PriceList>
    </PricesContainer>
  </BackgroundWrapper>
);

export default Prices;
