# 文件读写


## 如何向文本中追加内容

1. 异步操作

```js
const fs = require('fs');

fs.appendFile('message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

2. 同步操作

```js
const fs = require('fs');

fs.appendFileSync('message.txt', 'data to append');
```


## 使用 stream

wip

```js
var fs = require('fs');
var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
logStream.write('Initial line...');
logStream.end('this is the end line');
```

## 参考

- [File System](https://nodejs.org/api/fs.html)
- [How to append to a file in Node?](https://stackoverflow.com/a/11267583)