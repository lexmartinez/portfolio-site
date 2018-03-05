# portfolio-site

[![Build Status](https://travis-ci.org/lexmartinez/portfolio-site.svg?branch=master)](https://travis-ci.org/lexmartinez/portfolio-site)
[![NodeJS version](https://img.shields.io/badge/node-v8.9.4-green.svg)](https://nodejs.org/es/)
[![NPM version](https://img.shields.io/badge/npm-v5.6.0-red.svg)](https://www.npmjs.com/)
[![vueJS version](https://img.shields.io/badge/vueJS-v2.9.3-green.svg)](https://vuejs.org/)
[![GitHub license](https://img.shields.io/github/license/lexmartinez/portfolio-site.svg)](https://github.com/lexmartinez/portfolio-site/blob/master/LICENSE.md)
<br/><br/>
:briefcase: Personal portfolio site built on VueJS

### Quick start

```bash
# clone repo
$ git clone https://github.com/lexmartinez/portfolio-site

# change directory to cloned app
$ cd portfolio-site

# install the dependencies with npm
$ npm install

# start the server
$ npm run dev
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Dependencies](#dependencies)
* [Developing](#developing)
* [Testing](#testing)
* [Production](#production)
* [License](#license)

## Dependencies
 
 What you need to run this app:
 * `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
 * Ensure you're running Node (`v8.x.x`+) and NPM (`5.x.x`+)
 
 ## Developing
 
 After you have installed all dependencies you can now start developing with:
 
 * `npm run dev`
 
 It will start a local server using `webpack` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

 ## Testing
 
 `portfolio-site` has an [ESLint](https://eslint.org/) integration for consistent code inspection, you can run that tool with command:
 
 * `npm test`
 
## Production

In order to generate a dist bundle you can use the following commands:

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

 ## Deployment
  
This app is ready to be deployed to github pages through TravisCI (using the .travis.yml file) you just need to create the github repo and setup the github key on travisCI

## License

This project is licensed under MIT License - see the [LICENSE.md](https://github.com/lexmartinez/portfolio-site/blob/master/LICENSE.md) file for details
