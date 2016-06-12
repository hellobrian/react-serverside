var fs = require('fs');

var criticalCSS = fs.readFileSync('./dist/css/inline.css', 'utf8');

module.exports = {
  __html: `${criticalCSS}`
}
