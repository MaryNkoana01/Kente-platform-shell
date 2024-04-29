module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run lighthouse:serve',
      url: ['http://localhost:3000'],
      settings: {
        chromeFlags: "--ignore-certificate-errors --no-sandbox"
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.8 }],
      },
    },
  },
};
