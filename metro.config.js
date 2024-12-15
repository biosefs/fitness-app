module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '../.env', // Adjust the path to point to the root folder
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      }],
      '@babel/plugin-transform-private-methods', // Add this line
    ],
  };
  