import styled from 'styled-components';

import DividerLine from 'components/atoms/DividerLine';
import {
  DefaultParagraph,
  H2,
  H3,
  LargeParagraph,
  SmallParagraph,
} from 'components/atoms/typography.styles';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import {
  Black050,
  Blue010,
  Green050,
  Green100,
} from 'components/styling/colors';
import priceListContent from 'components/Prices/content/priceList';

const PricesContainer = styled.div`
  padding: 40px 40px 80px;
`;

const PriceList = styled.div`
  padding-top: 30px;
`;

const PriceAndOrder = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 4px;
  justify-content: space-between;
  align-items: baseline;
`;

const ServiceUnit = styled.div`
  padding-top: 20px;
`;

const PricesSubTitle = styled(H3)`
  /* padding-bottom: 8px; */
`;

const OrderButton = styled(SmallParagraph)`
  cursor: pointer;
`;

const purchaseService = () => {
  console.log('Not Implemented (yet).');
};

const Prices = () => (
  <BackgroundWrapper backgroundColor={Blue010}>
    <PricesContainer>
      <H2 textColor={Green100}>Árak</H2>
      <PriceList>
        {priceListContent.map((priceListItem, priceListIndex) => (
          <div key={priceListIndex}>
            <PricesSubTitle textColor={Green050}>{priceListItem.categoryName}</PricesSubTitle>
            {priceListItem.services.map((serviceItem, serviceItemIndex) => (
              <ServiceUnit key={serviceItemIndex}>
                <LargeParagraph className="bold" textColor={Green100}>{serviceItem.name}</LargeParagraph>
                <PriceAndOrder>
                  <DefaultParagraph textColor={Black050}>{serviceItem.price}</DefaultParagraph>
                  <OrderButton textColor={Green050} onClick={purchaseService}>
                    Megrendelem
                  </OrderButton>
                </PriceAndOrder>
              </ServiceUnit>
            ))}
            { priceListIndex !== priceListContent.length - 1 && <DividerLine /> }
          </div>
        ))}
      </PriceList>
    </PricesContainer>
  </BackgroundWrapper>
);

export default Prices;
