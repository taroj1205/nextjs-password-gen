/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/gen",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
