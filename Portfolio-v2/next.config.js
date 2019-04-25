const NextComposePlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const next = require('next');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handleNextRequests = app.getRequestHandler();

app.prepare().then(() => {
  const server = new http.Server((req, res) => {
    // Add assetPrefix support based on the hostname
    if (req.headers.host === 'http://localhost:7777') {
      app.setAssetPrefix(
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js/index'
      );
    } else {
      app.setAssetPrefix('');
    }

    handleNextRequests(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
module.exports = NextComposePlugins([withCss, withSass, withFonts], {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
});
