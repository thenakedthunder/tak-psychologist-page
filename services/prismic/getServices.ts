// @ts-ignore
// eslint-disable-next-line import/extensions
import { createClient } from 'prismicio.ts';

const getServices = async () => {
  const client = createClient();
  const services = await client.getAllByType('service_subpage');

  return services;
};

export default getServices;
