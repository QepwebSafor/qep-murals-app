/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "coin-images.coingecko.com",
      },
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
};

export default nextConfig;
