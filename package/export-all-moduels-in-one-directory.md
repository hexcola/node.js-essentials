# 将一个目录下的所有 js 模块导出

```js

```

下面这段代码看起来不错，需要验证：

```js
var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './routes/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) );
});
```

## 参考

- [node.js require all files in a folder?](https://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder)
- [Node.js - How to load modules recursively from directory](https://coderwall.com/p/f3qtoa/node-js-how-to-load-modules-recursively-from-directory)