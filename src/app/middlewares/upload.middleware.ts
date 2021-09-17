import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'storage/uploads'),
  filename: (req, file, callback) => callback(null, `${Date.now()}.${file.mimetype.split('/')[1]}`),
});

const upload = multer({ storage });

export default upload;
