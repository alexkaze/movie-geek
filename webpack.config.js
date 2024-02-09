const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//////////////////////////////////////////////////////////////////////////////////////

let mode = 'development';
let target = 'web';
let devtool = 'source-map';
const optimization = {
  minimize: true,
  minimizer: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: { plugins: [['webp', { quality: 1 }]] },
      },
    }),
  ],
};

const pluginCssOptions =
  process.env.MODE === 'production'
    ? {
        filename: './css/[contenthash].css',
        chunkFilename: './css/[contenthash].css',
      }
    : { filename: './css/[name].css' };

const plugins = [
  new MiniCssExtractPlugin(pluginCssOptions),
  new HtmlWebpackPlugin({ template: 'src/index.html' }),
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: 'write-references',
    },
  }),
  new Dotenv({ systemvars: true }),
];

// Conditions
if (process.env.MODE === 'production') {
  mode = 'production';
  target = 'browserslist';
  devtool = false;

  optimization.minimizer.push(
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
    })
  );

  optimization.runtimeChunk = 'single';
  optimization.splitChunks = {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        name: false,
      },
    },
  };

  plugins.push(
    // for netlify deploy
    new CopyPlugin({
      patterns: [{ from: './_redirects', to: './' }],
    })
  );
}

if (process.env.SERVE) plugins.push(new reactRefreshWebpackPlugin());

/////////////////////////////
/////////////////////////////
/////////////////////////////
module.exports = {
  mode,
  target,

  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),

    filename:
      process.env.MODE === 'production'
        ? './js/[contenthash].js'
        : './js/[name].bundle.[contenthash].js',

    chunkFilename:
      process.env.MODE === 'production'
        ? './js/[contenthash].js'
        : './js/[name].bundle.chunk.[contenthash].js',

    assetModuleFilename: 'images/[contenthash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  optimization,
  plugins,
  devtool,

  resolve: {
    alias: {
      '@__mocks__': path.resolve(__dirname, 'src/__mocks__/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@test': path.resolve(__dirname, 'src/test/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },

    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src/scss'), 'node_modules'],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
