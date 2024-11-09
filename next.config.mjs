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
        hostname: "cdn2.thedogapi.com"
      }
    ],
  },
};

export default nextConfig;
