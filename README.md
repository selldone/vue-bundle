# [Selldone Vue App Bundle](https://selldone.com/)

[![npm version](https://img.shields.io/npm/v/@selldone/vue-bundle.svg?style=flat)](https://www.npmjs.com/package/@selldone/vue-bundle) 
[![Build Status](https://travis-ci.com/selldone/vue-bundle.svg?branch=master)](https://travis-ci.com/selldone/vue-bundle)
[![codecov](https://codecov.io/gh/selldone/vue-bundle/branch/master/graph/badge.svg)](https://codecov.io/gh/selldone/vue-bundle)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/selldone/vue-bundle/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://selldone.com)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://selldone.com/faq)


![SELLDONE VUE BUNDLE](/readme/github-vue-bundle-small.png)


**Vue Bundle** is a ready-to-use project designed to help developers create apps for merchants who use Selldone store builder and e-commerce platform. 

Selldone, as an eCommerce platform, operates like an angel for the growth of businesses. Whether you have a small brick and mortar store or a large company, you need to showcase your product on the internet. Lower operating costs and greater flexibility.Selldone used to build online stores. We are providing an always-improving e-commerce management toolchain that gains new features every weak, like integrating store administration and visual programming interface to create custom automation processes or AI integration. 

Visit the [**Selldone Apps**](https://selldone.com/apps) to learn more.
For more information about creating apps for the Selldone merchants and customers, take a look at the [development documentations](https://selldone.com/help).

## API documentation
Visit the [Free Ecommerce Platform](https://selldone.com) to learn more about Selldone.

Visit the [Selldone Shop Owner API Playground](https://selldone.com/apps/api/owner) to learn more about Selldone's API.

Visit the [Selldone Shop Customer API Playground](https://selldone.com/apps/api/shop) to learn more about Selldone's XAPI *Customer APIs*.


## Project setup

### Installation
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Test local application
Guide to run full feature Selldone applications on your local machine.



```sh
# Local app url
http://localhost:8000?api={api_key}&shop_id={shop_id}
```

### URL
You can simulate app loading procedure by adding sop_id and api to your local app's url query.


**api_key** : Your application API key. Find in Shuttle > Company > App > API Key

**shop_id** : Merchant shop ID. find in your admin store url => https://selldone.com/shuttle/shop/ **1 (YOUR SHOP ID)**



![Application First Page](/readme/firs-page.png)


### Client config
You must set **redirect url** and **scope** by metas in your application pages's header.


| Meta        | Description           | Require  |
| ------------- |:-------------:| -----:|
| app-redirect-url      | Client app redirect URL | ✔ |
| app-scope      | Access scopes      |   ✔ |
| app-access-token | Customer access token      |    ❌ |




```sh
# Page header (index.html)
<meta name="app-redirect-url" content="APP REDIRECT URL Ex. localhost:8000 or your-domain.com/sample-app">
<meta name="app-scope" content="ACCESS SCOPES HERE Ex. profile shop-products shop-warehouse shop-process-center">
```

#### Optional access token
Access token has been saved in page sessions! sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
You can save access token in your secure database (Your server) and provide that in the **app-access-token** meta.

```sh
# Page header (index.html)
<meta name="app-access-token" content="ACCESS TOKEN HERE">
```
