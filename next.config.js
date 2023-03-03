/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


/*
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/"slug*',
        destination: 'https://headlessnext.local/wp-json/wp/v2/posts?slug=:slug*'
      },
    ];
  },
};
*/
