import styled from 'styled-components';

import DividerLine from 'components/atoms/DividerLine';
import { H2, H3 } from 'components/atoms/typography.styles';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { Blue010, Green050, Green100 } from 'components/styling/colors';
import ServiceUnit from 'components/Prices/molecules/ServiceUnit';
import getColorWithOpacity from 'components/styling/StylingUtility';

// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';
import { PricesDocument } from 'prismicio-types';

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

interface PricesProps {
  page: PricesDocument;
}

const Prices = ({ page }: PricesProps) => (
  <BackgroundWrapper backgroundColor={getColorWithOpacity(Blue010, '80')}>
    <PricesContainer>
      <H2 textColor={Green100}>{page.data.page_title}</H2>
      <PriceList>
        {page.data.slices.map((priceListItem, priceListIndex) => (
          <div key={priceListIndex}>
            <H3 textColor={Green050}>{priceListItem.primary.service_group_name}</H3>
            {priceListItem.items.map((serviceItem, serviceItemIndex) => (
              <ServiceUnit
                key={serviceItemIndex}
                unit={{
                  name: serviceItem.service_name,
                  price: serviceItem.price,
                }}
              />
            ))}
            {priceListIndex !== page.data.slices.length - 1 && <DividerLine />}
          </div>
        ))}
      </PriceList>
    </PricesContainer>
  </BackgroundWrapper>
);

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getByUID('prices', 'prices-page');

  return {
    props: { page },
  };
}

export default Prices;
