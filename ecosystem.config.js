module.exports = {
  apps: [
    {
      name: "portal",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
