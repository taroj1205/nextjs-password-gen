/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/gen?amount=16&length=20&upper=false&symbols=false&numbers=false",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
