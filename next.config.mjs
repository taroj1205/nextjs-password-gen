/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/gen?amount=16&length=20&upper=true&symbols=true&numbers=true",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
