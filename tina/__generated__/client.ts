import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '851a6e9b7d39686f79aa07d2da35552e3d97830f', queries });
export default client;
  