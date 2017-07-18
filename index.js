const argv = require('minimist')(process.argv.slice(2))
const os = require('os')
const osName = require('os-name')
const clipboardy = require('clipboardy')
const npm = require('global-npm')

const data = {
  nodeVersion: process.version,
  npmVersion: npm.version,
  osInfo: osName(os.platform(), os.release())
}

const info = `**Node Version** ${data.nodeVersion} (NPM: ${data.npmVersion})
**Operating System**: ${data.osInfo}
`

function handleError (err) {
  console.log(`There was an error writing to your clipboard ${err}`)
  display()
}

function display () {
  console.log(info)
}

clipboardy.write(info)
  .then(display)
  .catch(handleError)
