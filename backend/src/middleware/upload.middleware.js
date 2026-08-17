import multer from "multer";
import path from "path";

// Configuring where and how the files are being saved
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // save it in upload folder
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.orginalname));
  },
});

//File filter to allow only image
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image file are allowed!", false));
  }
};

export const upload = multer({ storage, fileFilter });
