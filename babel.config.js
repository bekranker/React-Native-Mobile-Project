module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"], // Root directory
          alias: {
            "@assets": "./Assets", // Assuming "Assets" is in the root directory
            "@components": "./Components", // Assuming "Components" is in the root directory
            "@Styles": "./Styles", // Assuming "Styles" is in the root directory
            "@Musics": "./Assets/Musics", // If Musics is under Assets
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: true,
          allowUndefined: false,
        },
      ],
    ],
  };
};
