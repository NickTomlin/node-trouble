#!/usr/bin/env node

'use strict'

const argv = require('minimist')(process.argv.slice(2), {
  alias: {
    h: 'help'
  }
})
const os = require('os')
const osName = require('os-name')
const clipboardy = require('clipboardy')
const npm = require('global-npm')
const findPkg = require('pkginfo').find
const path = require('path')
const chalk = require('chalk')

const colorlessChalk = chalk.constructor({ enabled: false })
const EOL = os.EOL

function getDepedencyInfo (depName) {
  let version

  try {
    let depMain = require.resolve(depName)
    let depMainDir = path.dirname(depMain)
    version = findPkg({ filename: depName }, depMainDir).version
  } catch (e) { version = '(No local version found)' }

  return {
    name: depName,
    version: version
  }
}

function getDependenciesInfo () {
  let nonKeywordArgs = argv['_']

  return nonKeywordArgs
    .map(getDepedencyInfo)
    .map(dep => `${dep.name}@${dep.version}`)
}

function formatInfo (systemInfo, dependencyInfo, color) {
  let info = [
    `**Node Version** ${systemInfo.nodeVersion} (NPM: ${systemInfo.npmVersion})`,
    `**Operating System**: ${systemInfo.osInfo}`
  ].map(i => color.blue(i)).join(EOL)

  if (dependencyInfo) {
    let formatted = dependencyInfo.map(i => color.magenta(i)).join(EOL)
    info += EOL + EOL + formatted
  }

  return info
}

function printUsage () {
  console.log(chalk`{magenta.bold.underline trouble} - collect information for troubleshooting issues with open source node packages


{cyan Usage:}
    {magenta trouble} {blue [<{green dependency-names}>]}

    $ trouble clipboardy global-npm package-that-does-not-exist


{cyan Options:}
    -h | help print this help text
  `)
}

function main () {
  const systemInfo = {
    nodeVersion: process.version,
    npmVersion: npm.version,
    osInfo: osName(os.platform(), os.release())
  }
  const dependencyInfo = getDependenciesInfo()
  let clipboardInfo = formatInfo(systemInfo, dependencyInfo, colorlessChalk)
  let terminalInfo = formatInfo(systemInfo, dependencyInfo, chalk)

  clipboardy.write(clipboardInfo)
    .then(function success () {
      console.log(chalk.green('The following information has been copied to your clipboard:') + EOL)
      console.log(terminalInfo)
    })
    .catch(function error (err) {
      console.log(chalk.red(`There was an error writing to your clipboard ${err}`))
      console.log(terminalInfo)
    })
}
if (argv.help) {
  printUsage()
} else {
  main()
}
