module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'josh',
      script    : 'current/.next/production-server/index.js',
      env_production: {
        PORT: 3200,
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'kyle',
      host : '159.89.143.41',
      ref  : 'origin/master',
      repo : 'git@github.com:kyle-mccarthy/josh-newman.git',
      path : '/var/www/kyle/sites/josh-newman',
      ['post-deploy'] : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
