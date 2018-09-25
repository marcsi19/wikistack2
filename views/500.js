const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>404 Not Found</h3>
  <p><img src='https://cdn.dribbble.com/users/1623539/screenshots/3859114/500-404-mockups_1x.jpg' ></p>`
 );

