import { KeyTextField, RichTextField } from '@prismicio/client';
import { ListingSliceDefaultItem, Simplify, TextWithHeadingAndHighlightedParagraphsSliceDefaultItem } from 'prismicio-types';

export interface ProseItemType {
  header: KeyTextField;
  highlightedItems?: RichTextField;
  defaultTextItems?: Simplify<TextWithHeadingAndHighlightedParagraphsSliceDefaultItem>[];
}

export interface ListItemType {
  date: KeyTextField;
  title: KeyTextField;
  otherDetails?: Simplify<ListingSliceDefaultItem>[];
}

export interface ListType {
  header: KeyTextField;
  items: ListItemType[];
}
