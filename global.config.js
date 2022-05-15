const site_name =
  process.env.SITE_NAME ||
  'SOLNFTDROPS'
const name =
  process.env.BLOG_NAME ||
  'ALPHA CONNECTION - MADE WITH ❤️ IN DEGEN POWERED BY DGNZ COIN'
const blogTitle =
  process.env.BLOG_TITLE ||
  'Featured Drops'
const footerText =
  process.env.BLOG_FOOTER_TEXT ||
  'All rights reserved.'

module.exports = {
  name,
  site_name,
  blogTitle,
  footerText,
}
