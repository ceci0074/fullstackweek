/** @type {import('next').NextConfig} */

//module.exports = {
    
  //  images: {
  //      domains: ['utfs.io'],
  //  },

//};

//export default nextConfig; 


const withImages = require('next-images');

module.exports = withImages({
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io',
            },
        ],
    },
});
