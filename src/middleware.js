import multer from "multer";

const upload = multer({ dest: "uploads/" });

export const uploadText = upload.single("text");
