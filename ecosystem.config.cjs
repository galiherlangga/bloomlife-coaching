module.exports = {
  apps: [
    {
      name: "bloomlife",
      script: "build/index.js", // or whatever your build output is
      interpreter: "bun",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: '$APP_PORT',
      },
    }
  ]
};