import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";
import { toDataURI } from "./utils/encode";

const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
  try {
    if (req?.file === undefined) {
      return res.status(400).send({
        message: "No file uploaded",
        data: null,
      });
    }
    const dataURI = toDataURI(req.file);
    const result = await handleUpload(dataURI);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    if (req.files === undefined || req.files?.length === 0) {
      return res.status(400).send({
        message: "No files uploaded",
        data: null,
      });
    }
    const files = req.files as Express.Multer.File[];
    const dataURIs = files
      ?.map((file: Express.Multer.File) => toDataURI(file))
      .map(handleUpload);
    const results = await Promise.all(dataURIs);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
