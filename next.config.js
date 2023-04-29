/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    domains : ['http://slw.local/graphql', 'localhost' ] // <== Domain name
  },
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
