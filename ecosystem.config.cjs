module.exports = {
  apps: [
    {
      name: "bloomlife",
      script: "build/index.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 3003
      }
    }
  ]
};