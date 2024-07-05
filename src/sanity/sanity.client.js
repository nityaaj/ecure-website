
import { createClient } from "@sanity/client";

const config = {
  projectId: "654mbk54",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
};

const client = createClient(config);

export default client;