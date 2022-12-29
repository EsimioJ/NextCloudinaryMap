const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const asset = "casoni/IMG_8252_wvwnug";
cloudinary.api
  .resource(asset, { image_metadata: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.warn(error);
  });
