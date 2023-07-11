import { defineConfig } from "tinacms";
import { getSession, signIn, signOut } from "next-auth/react";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
export default defineConfig({
  contentApiUrlOverride: "/api/gql",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  admin: {
    auth: {
      useLocalAuth: isLocal,
      customAuth: !isLocal,
      authenticate: async () => {
        if (isLocal) {
          return true;
        }
        return signIn("Credentials", { callbackUrl: "/admin/index.html" });
      },
      getToken: async () => {
        return { id_token: "" };
      },
      getUser: async () => {
        if (isLocal) {
          return true;
        }
        const session = await getSession();
        return !!session;
      },
      logout: async () => {
        if (isLocal) {
          return;
        }
        return signOut({ callbackUrl: "/admin/index.html" });
      },
    },
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: () => "/",
        },
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header",
          },
          {
            type: "object",
            name: "logo",
            label: "Logo",
            fields: [
              { type: "image", name: "url", label: "URL" },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
          {
            type: "object",
            list: true,
            name: "links",
            label: "Links",
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.header,
                };
              },
            },
            fields: [
              { type: "string", name: "header" },
              { type: "string", name: "description" },
              { type: "string", name: "url" },
            ],
          },
        ],
      },
    ],
  },
});
