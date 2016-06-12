import React from 'react';
const inlineCSS = require('../inlineCSS');

const Index = React.createClass({
  render: function() {
    return (
      <html lang="en">
      <head>
        <title>Document</title>
        <style dangerouslySetInnerHTML={inlineCSS}>
        </style>
      </head>
      <body>
        <h1>hello world</h1>
      </body>
      </html>
    );
  }
});

module.exports = Index;
