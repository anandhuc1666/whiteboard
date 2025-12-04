import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Ensure Cloudinary is configured (if not already done in main index.js)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Dynamically set resource_type based on file mimetype
    const isVideo = file.mimetype.startsWith('video');
    return {
      folder: 'whiteboard_courses',
      resource_type: isVideo ? 'video' : 'image',
      // Explicitly allow video formats
      allowed_formats: isVideo ? ['mp4', 'mkv', 'avi', 'mov'] : ['jpg', 'png', 'jpeg', 'webp'],
    };
  },
});

const courseUpload = multer({ storage: storage });

export default courseUpload;