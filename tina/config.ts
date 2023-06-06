import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
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
