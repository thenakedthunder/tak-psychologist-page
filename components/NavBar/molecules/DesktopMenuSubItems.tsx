import AnimateHeight from 'react-animate-height';
import styled from 'styled-components';

import { MenuItemWithSubItems } from 'components/NavBar/content/menuItems';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';
import { Green010, Green050, Grey010 } from 'components/styling/colors';
import { useRouter } from 'next/router';

const Container = styled(AnimateHeight) <{ colorScheme: 'dark' |'light' }>`
  div {
      background-color: ${({ colorScheme }) => (colorScheme === 'light' ? Grey010 : Green010)};
    }
`;

interface SubMenuItemProps {
  height: number | 'auto',
  item: MenuItemWithSubItems,
}

const SubMenuItems = ({ height, item }: SubMenuItemProps) => {
  const router = useRouter();

  return (
    <Container
      duration={500}
      height={height}
      colorScheme={router.pathname.includes('blog') ? 'dark' : 'light'}
    >
      {item.subItems.map((subItem, subItemIndex) => (
        <DefaultParagraph
          key={subItemIndex}
          textColor={Green050}
        >
          <PsychoLink href={subItem.linkHref}>
            {subItem.linkText}
          </PsychoLink>
        </DefaultParagraph>
      ))}
    </Container>
  );
};

export default SubMenuItems;
