import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import multer from 'multer';
import { Upload } from '../models.js';

// Configure S3 client for z.com storage
const s3Client = new S3Client({
  region: process.env.Z_STORAGE_REGION,
  credentials: {
    accessKeyId: process.env.Z_STORAGE_KEY,
    secretAccessKey: process.env.Z_STORAGE_SECRET
  }
});

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Upload file to z.com storage
async function uploadToStorage(file, key) {
  const command = new PutObjectCommand({
    Bucket: process.env.Z_STORAGE_BUCKET,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype
  });

  await s3Client.send(command);
  return `https://${process.env.Z_STORAGE_BUCKET}.storage.z.com/${key}`;
}

// Delete file from z.com storage
async function deleteFromStorage(key) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.Z_STORAGE_BUCKET,
    Key: key
  });

  await s3Client.send(command);
}

export { upload, uploadToStorage, deleteFromStorage };