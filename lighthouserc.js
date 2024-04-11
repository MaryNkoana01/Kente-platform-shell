module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run start:dev',
        url: ['http:/localhost:4400']
  
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
