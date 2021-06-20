const fs = require("fs")
const path = require('path')

module.exports =  function getSideBar() {
  const posts = path.join(__dirname, "../posts")
  const dir =
    fs.readdirSync(posts)
      .filter(file => {
        return fs.statSync(path.join(posts, file)).isDirectory()
      });
  const files = []
  dir.forEach((e) => {
    const childDir = path.resolve(posts, e);
    files.push({
      title: e,
      path: '/posts/' + e + '/',
      collapsable: true,
      children: [...fs.readdirSync(childDir)
        .filter(file => file.toLowerCase() !== "readme.md")
        .map(c => '/posts/' + e + '/' + c.replace(/\.md$/, ""))]
    })
  })
  return files
}

