# [Selldone Vue App Bundle](https://selldone.com/)
**Vue Bundle** is a ready-to-use project designed to help developers create apps for merchants who use Selldone store builder and e-commerce platform. 

Selldone, as an eCommerce platform, operates like an angel for the growth of businesses. Whether you have a small brick and mortar store or a large company, you need to showcase your product on the internet. Lower operating costs and greater flexibility.Selldone used to build online stores. We are providing an always-improving e-commerce management toolchain that gains new features every weak, like integrating store administration and visual programming interface to create custom automation processes or AI integration. 

Visit the [**Selldone Apps**](https://selldone.com/apps) to learn more.
For more information about creating apps for the Selldone merchants and customers, take a look at the [development documentations](https://selldone.com/help).

## API documentation

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
You can simulate app loading procedure by adding sop_id and api to your local app's url query.



```sh
# Local app url
http://localhost:8000?api={api_key}&shop_id={shop_id}
```

**api_key** : Your application API key. Find in Shuttle > Company > App > API Key

**shop_id** : Merchant shop ID. find in your admin store url => https://selldone.com/shuttle/shop/ **1 (shop id)**


![Application First Page](/readme/firs-page.png)
