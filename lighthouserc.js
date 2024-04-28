module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run lighthouse:serve',
      url: ['http://localhost:3000'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
