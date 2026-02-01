// Script to sync Cloudinary images to a local JSON file
// Run this whenever you upload new images: npm run sync-images

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function syncImages() {
    try {
        console.log('Fetching images from Cloudinary...');
        console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);

        const result = await cloudinary.api.resources({
            type: 'upload',
            max_results: 500,
        });

        console.log('API Response:', result.resources.length, 'images found');

        const images = result.resources.map((resource, index) => ({
            id: index + 1,
            publicId: resource.public_id,
            src: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/${resource.public_id}`,
            title: resource.public_id.split('/').pop() || `Illustration ${index + 1}`,
        }));

        // Write to public folder so it's accessible
        const outputPath = path.join(__dirname, '../public/images-data.json');
        fs.writeFileSync(outputPath, JSON.stringify({ images }, null, 2));

        console.log(`✅ Successfully synced ${images.length} images to public/images-data.json`);
        console.log('Your gallery will now display these images automatically.');
    } catch (error) {
        console.error('❌ Error syncing images:', error.message);
        console.log('\nMake sure you have added CLOUDINARY_API_SECRET to your .env file');
    }
}

syncImages();
