import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'path',
    path: '/magamrol/eletut',
  },
  {
    type: 'education',
    path: '/magamrol/kepzesek',
  },
  {
    type: 'mission',
    path: '/magamrol/misszio',
  },
  {
    type: 'publicationsAndMemberships',
    path: '/magamrol/publikaciok-es-tagsagok',
  },
  {
    type: 'consultation',
    path: '/amiben-segiteni-tudok/egyeni-konzultacio',
  },
  {
    type: 'groups',
    path: '/amiben-segiteni-tudok/csoportok',
  },
  {
    type: 'artTherapy',
    path: '/amiben-segiteni-tudok/muveszetterapia',
  },
  {
    type: 'trainings',
    path: '/magamrol/szervezetfeljesztes-trening',
  },
  {
    type: 'prices',
    path: '/arak/arlista',
  },
  {
    type: 'offer',
    path: '/arak/egyedi-ajanlatkeres',
  },
  {
    type: 'contactInformation',
    path: '/elerhetosegek/bejelentkezesi-informaciok',
  },
  {
    type: 'location',
    path: '/elerhetosegek/konzultaciok-helyszine',
  },
  {
    type: 'socialMedia',
    path: '/elerhetosegek/kozossegi-media',
  },
  {
    type: 'newGroups',
    path: '/friss-hirek/indulo-csoportok',
  },
  {
    type: 'other',
    path: '/friss-hirek/erdekessegek',
  },
  {
    type: 'faq',
    path: '/gyakran-ismetelt-kerdesek',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
