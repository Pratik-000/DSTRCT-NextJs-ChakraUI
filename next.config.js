module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["images.unsplash.com", "s3-alpha-sig.figma.com", 'i.ibb.co',
      'scontent.fotp8-1.fna.fbcdn.net'],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
};
