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
import styled from 'styled-components';

const PricesContainer = styled.div`
  padding: 40px;
`;

const PriceList = styled.div`
  padding-top: 30px;
`;

const PriceAndOrder = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 4px;
  justify-content: space-between;
`;

const ServiceUnit = styled.div`
  padding-bottom: 8px;
`;

const PricesSubTitle = styled(H3)`
  padding-bottom: 20px;
`;

const Prices = () => (
  <BackgroundWrapper backgroundColor={Blue010}>
    <PricesContainer>
      <H2 textColor={Green100}>Árak</H2>
      <PriceList>
        <PricesSubTitle textColor={Green050}>Rontással kapcsolatos dolgok</PricesSubTitle>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás felvitele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <DividerLine />
        <PricesSubTitle textColor={Green050}>Rontással kapcsolatos dolgok</PricesSubTitle>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás felvitele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <DividerLine />
        <PricesSubTitle textColor={Green050}>Rontással kapcsolatos dolgok</PricesSubTitle>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás felvitele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <DividerLine />
        <PricesSubTitle textColor={Green050}>Rontással kapcsolatos dolgok</PricesSubTitle>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás felvitele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
        <ServiceUnit>
          <LargeParagraph className="bold" textColor={Green100}>Rontás levétele</LargeParagraph>
          <PriceAndOrder>
            <DefaultParagraph textColor={Black050}>16.000.-Ft</DefaultParagraph>
            <SmallParagraph textColor={Green050}>Megrendelem</SmallParagraph>
          </PriceAndOrder>
        </ServiceUnit>
      </PriceList>
    </PricesContainer>
  </BackgroundWrapper>
);

export default Prices;
