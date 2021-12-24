import { Application, Request, Response, Router } from 'express'
import { uploadFolderName } from "../../configs/config";
import { UploadError } from '../../errors/UploadError';
import path from "path";
import multer from "multer";

const uploadsDir = `./${uploadFolderName}`

// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
  
      cb(null, fileName + fileExt);
    },
  });

// preapre the final multer upload object
export const upload = multer({
    storage: storage,
    fileFilter: async (req: Request, file: any, cb: Function): Promise<any> => { 
        if(
            file.mimeType === 'image/png' ||
            file.mimeType === 'image/jpg' ||
            file.mimeType === 'image/jpeg'
        ) {
            cb(null, true)
        } else {
            cb(new UploadError('Only JPG / JPEG / PNG is allowed'), false)
        }
    }
})