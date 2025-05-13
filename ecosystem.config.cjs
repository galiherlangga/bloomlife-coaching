module.exports = {
  apps: [
    {
      name: "bloomlife",
      script: "build/index.js",   // your built output
      interpreter: "bun",         // bun is the runtime
      interpreter_args: "run",    // tells bun to actually run it
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};