module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@components": "./components",
            "@containers": "./containers",
            "@styles": "./styles",
            "@utils": "./utils",
          },
          extensions: [".js", ".jsx"],
        },
      ],
    ],
  };
};
