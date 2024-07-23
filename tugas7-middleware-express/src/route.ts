import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import cloudinary from "./utils/cloudinary";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
  const file = req.file as any;
  handleUpload(file.path)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});
router.get("/upload/multiple", multiple, (req, res) => {});

export default router;
