/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// } nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ['localhost', 'hailey-strapi-blog.herokuapp.com', 'res.cloudinary.com'],
  },
}
