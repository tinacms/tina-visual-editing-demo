import { defineConfig } from "tinacms";
const LOCAL_KEY = "tinacns-fake-auth";

export default defineConfig({
  contentApiUrlOverride: "/api/gql",
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  admin: {
    auth: {
      customAuth: true,
      authenticate: async () => {
        // Add your authentication logic here
        localStorage.setItem(LOCAL_KEY, "some-token");
      },
      getToken: async () => {
        // Add your own getting token
        const token = localStorage.getItem(LOCAL_KEY);
        if (!token) {
          return { id_token: "" };
        }
        return { id_token: token };
      },
      getUser: async () => {
        // Add your own getting user
        // if this function returns a truthy value, the user is logged in and if it rutnrs
        if (localStorage.getItem(LOCAL_KEY)) {
          return true;
        }
        return false;
      },
      logout: async () => {
        // add your own logout logic
        localStorage.removeItem(LOCAL_KEY);
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
