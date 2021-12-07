module.exports = function (api) {
  api.cache(true);

  const presets = ["babel-preset-expo"];

  const plugins = [
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "~/",
        rootPathSuffix: "./src/",
      },
    ],
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./src"],
        alias: {
          ["~/screens"]: "./screens",
          ["~/components"]: "./components",
          ["~/hooks"]: "./hooks",
          ["~/navigation"]: "./navigation",
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
