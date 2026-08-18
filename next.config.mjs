/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        // The Apple Pay domain-association file has no extension, so it
        // defaults to application/octet-stream — which makes browsers
        // download it and can make Apple's verification fail. Force it to
        // serve as plain text so it displays and verifies.
        source: "/.well-known/apple-developer-merchantid-domain-association",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
    ];
  },
};

export default nextConfig;
