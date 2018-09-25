const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>404 Not Found</h3>
  <p><img src='http://codinghelptech.com/blog_post/internet-http-error-404-file-not-found.jpg' ></p>`
 );
