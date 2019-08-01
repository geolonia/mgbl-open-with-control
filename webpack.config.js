module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.ts',
    entry: './src/entry.ts'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}
