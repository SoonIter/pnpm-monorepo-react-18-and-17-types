# type error of monorepo with both react@17 and @18

! [jsx_type_error](. /docs/error2.png)

! [types_error](. /docs/error.png)


### Error Detail

react18-type: `import("@types+react@18.0.x/node_modules/@types/react")` 

react17-type: `import("@types+react@17.0.x/node_modules/@types/react")` 

react18-type assign to react17-type  ✅ 

react17-type assign to react18-type  ❌ `Type '{}' is not assignable to type 'ReactNode'.`

### Reason

@types/react@17 -> @18 has breaking changes

And many packages in the react community depend on `dependencies "@types/react": "*"`, causing the resolve dependency when installing to get the latest `@types/react@18.x` under the monorepo 

### Solution:

1. global overrides, if your monorepo are using react17 features and not react18 features you can use

The impact on the overall monorepo is theoretically minimal

```json
// <workspace-root>/package.json
"pnpm":{
    "@types/react": "17.0.xx"
}
```
2. use tsconfig path hack to point to @types/react and then point back in webpack alias

Under the subproject dimension, the impact is minimal

```json
// tsconfig.json
{
    "paths": {
        "react": [". /node_modules/@types/react"]
    }
}
```
```javascript
// webpack.config.js
module.exports = {
    resolve: {
        alias: {
            react: path.resolve(__dirname, '. /node_modules/react')
        }
    }
}
```

Related issues:

[DefinitelyTyped/DefinitelyTyped/pull/56210](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210)

[react/issues/24304](https://github.com/facebook/react/issues/24304)

[redwood/issues/5104](https://github.com/redwoodjs/redwood/issues/5104)

Official solution.

[short-term-solution](https://github.com/facebook/react/issues/24304#issuecomment-1094565891)

[long-term-solution](https://github.com/microsoft/DefinitelyTyped-tools/issues/433)
