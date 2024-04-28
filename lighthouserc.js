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
      // preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
      },
    },


  },
};
