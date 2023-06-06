import { Page } from "@/components/page";
import { client } from "@/tina/__generated__/client";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "home.md" });
  return <Page {...res} />;
}
