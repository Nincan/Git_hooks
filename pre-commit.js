const { execSync } = require('child_process')

const React = require('react')
const ReactDOM = require('react-dom')

if (process.env.NODE_ENV == 'production') {
  //console.log("HEY");
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}
