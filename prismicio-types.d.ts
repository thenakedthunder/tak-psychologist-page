// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface IndexPageV2DocumentData {
  /**
   * hero field in *homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.hero[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  hero: prismic.GroupField<Simplify<IndexPageV2DocumentDataHeroItem>>;
  /**
   * content header field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.content_header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  content_header: prismic.KeyTextField;
  /**
   * pricelist button text field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.pricelist_button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  pricelist_button_text: prismic.KeyTextField;
  /**
   * service group field in *homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.service_group[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  service_group: prismic.GroupField<
    Simplify<IndexPageV2DocumentDataServiceGroupItem>
  >;
}
/**
 * Item in homepage → hero
 *
 */
export interface IndexPageV2DocumentDataHeroItem {
  /**
   * quote text field in *homepage → hero*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: ide írd az idézet
   * - **API ID Path**: index_page_v2.hero[].quote_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  quote_text: prismic.RichTextField;
  /**
   * quote author field in *homepage → hero*
   *
   * - **Field Type**: Text
   * - **Placeholder**: ide meg az elkövető nevét
   * - **API ID Path**: index_page_v2.hero[].quote_author
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  quote_author: prismic.KeyTextField;
}
/**
 * Item in homepage → service group
 *
 */
export interface IndexPageV2DocumentDataServiceGroupItem {
  /**
   * service_name field in *homepage → service group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.service_group[].service_name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  service_name: prismic.KeyTextField;
  /**
   * service description field in *homepage → service group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: röviden, mert nem fog kifé
   * - **API ID Path**: index_page_v2.service_group[].service_description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  service_description: prismic.KeyTextField;
  /**
   * lean more button text field in *homepage → service group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.service_group[].lean_more_button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  lean_more_button_text: prismic.KeyTextField;
  /**
   * sublink field in *homepage → service group*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: index_page_v2.service_group[].sublink
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  sublink: prismic.KeyTextField;
}
/**
 * homepage document from Prismic
 *
 * - **API ID**: `index_page_v2`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexPageV2Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<IndexPageV2DocumentData>,
    "index_page_v2",
    Lang
  >;
export type AllDocumentTypes = IndexPageV2Document;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      IndexPageV2DocumentData,
      IndexPageV2DocumentDataHeroItem,
      IndexPageV2DocumentDataServiceGroupItem,
      IndexPageV2Document,
      AllDocumentTypes,
    };
  }
}