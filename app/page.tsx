import { Page } from "@/components/page";
import { dbConnection } from "../lib/databaseConnection";

export default async function Home() {
  const res = await dbConnection.queries.page({ relativePath: "home.md" });
  return <Page {...res} />;
}
