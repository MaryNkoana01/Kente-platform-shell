module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run lighthouse:serve',
      url: ['http://localhost:3000'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assertions: {
      'categories:performance': ['error', { minScore: 0.9 }],
      'categories:accessibility': ['warn', { minScore: 0.9 }],
    },

  },
};
