import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers";

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
  authorized: async (req, _res) => {
    if (req.method === "GET") {
      return true;
    }
    return false;
  },
});
