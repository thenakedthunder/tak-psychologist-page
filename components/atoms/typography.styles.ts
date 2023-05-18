import styled from 'styled-components';
import { Grey010 } from 'components/styling/colors';

// eslint-disable-next-line camelcase
import { Gentium_Book_Plus, Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin-ext'], style: ['normal', 'italic'], weight: ['400', '600'] });
const gentium = Gentium_Book_Plus({ subsets: ['latin-ext'], weight: ['400', '700'], display: 'swap' });

export const H1 = styled.h1`
    font-family: ${gentium.style.fontFamily}, serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    color: ${Grey010};
`;

export const H2 = styled.h2<{textColor: string}>`
    font-family: ${gentium.style.fontFamily}, serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: ${({ textColor }) => textColor};
    margin: 0;
`;

export const H3 = styled.h3<{ textColor: string }>`
    font-family: ${figtree.style.fontFamily}, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    color: ${({ textColor }) => textColor};
    margin: 0;
`;

export const LargeParagraph = styled.p<{ textColor: string }>`
    font-family: ${gentium.style.fontFamily}, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: ${({ textColor }) => textColor};
    margin: 0;
`;

export const DefaultParagraph = styled.p<{ textColor: string }>`
    font-family: ${figtree.style.fontFamily}, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    margin: 0;
    color: ${({ textColor }) => textColor};
`;

export const SmallParagraph = styled.p<{ textColor: string }>`
    font-family: ${figtree.style.fontFamily}, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: ${({ textColor }) => textColor};
    margin: 0;
`;

export const BoldSmallParagraph = styled(SmallParagraph)`
  font-weight: 700;
`;
