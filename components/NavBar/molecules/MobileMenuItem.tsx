import { LinkType } from 'types/LinkType';
import PsychoLink from 'components/atoms/PsychoLink';
import { Green050 } from 'components/styling/colors';
import MobileMenuItemParagraph from 'components/NavBar/atoms/MobileMenuItemParagraph';

interface MobileMenuItemProps {
  item: LinkType,
  onMenuItemClicked: () => void,
}

const MobileMenuItem = ({ item, onMenuItemClicked }: MobileMenuItemProps) => (
  <MobileMenuItemParagraph textColor={Green050} onClick={onMenuItemClicked}>
    <PsychoLink href={item.linkHref}>
      {item.linkText}
    </PsychoLink>
  </MobileMenuItemParagraph>
);

export default MobileMenuItem;
