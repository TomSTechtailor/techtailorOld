module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://techtailor.io/',
        permanent: true,
      },
    ];
  },
};
