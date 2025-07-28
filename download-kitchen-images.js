import axios from 'axios';
import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PEXELS_API_KEY = '44s2OkTT5uej83ucDmZRdKpdnOJ4BkT4oNOpWAQlBBPwHU6okqmqvGh1'; // Replace with your Pexels API key
const SEARCH_QUERY = 'modular kitchen';
const IMAGE_COUNT = 10;
const SAVE_FOLDER = path.join(__dirname, 'public/assets/images/');

const pexelsApi = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: { Authorization: PEXELS_API_KEY },
});

async function downloadImages() {
  try {
    await fs.ensureDir(SAVE_FOLDER);

    const response = await pexelsApi.get('search', {
      params: { query: SEARCH_QUERY, per_page: IMAGE_COUNT },
    });

    const photos = response.data.photos;
    console.log(`Found ${photos.length} images. Downloading...`);

    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];
      const imageUrl = photo.src.large;
      const imagePath = path.join(SAVE_FOLDER, `kitchen_${i + 1}.jpg`);

      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      await fs.writeFile(imagePath, imageResponse.data);

      console.log(`✅ Downloaded: kitchen_${i + 1}.jpg`);
    }

    console.log('🎉 All images downloaded successfully.');
  } catch (err) {
    console.error('❌ Error downloading images:', err.message);
  }
}

downloadImages();
