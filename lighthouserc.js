module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000/'],
        staticDistDir: './dist/.',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };