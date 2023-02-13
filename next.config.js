/** @type {import('next').NextConfig} */
const nextConfig = {
   fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
   experimental: {
      appDir: true,
   },
}

module.exports = nextConfig
