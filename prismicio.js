import * as prismic from '@prismicio/client';
import sm from './sm.json';

export default function createClient(options) {
  return prismic.createClient(sm.apiEndpoint, options);
}
