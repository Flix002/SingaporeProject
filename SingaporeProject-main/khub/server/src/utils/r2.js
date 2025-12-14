import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const R2_ACCOUNT_ID = process.env.CF_ACCOUNT_ID; // e.g. e86299bf709f164c49c7743f56829687
const R2_BUCKET = process.env.R2_BUCKET; // e.g. khubvideos

function createR2Client() {
  // Cloudflare R2 is S3-compatible; provide endpoint using account ID
  const endpoint = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;

  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
    }
  });

  return client;
}

async function createPresignedUploadUrl(key, contentType, expiresInSeconds = 3600) {
  const client = createR2Client();

  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    ContentType: contentType
  });

  const url = await getSignedUrl(client, command, { expiresIn: expiresInSeconds });
  return url;
}

async function createPresignedDownloadUrl(key, expiresInSeconds = 3600) {
  const client = createR2Client();

  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key
  });

  const url = await getSignedUrl(client, command, { expiresIn: expiresInSeconds });
  return url;
}

export { createPresignedUploadUrl, createPresignedDownloadUrl };
