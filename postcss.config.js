module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
