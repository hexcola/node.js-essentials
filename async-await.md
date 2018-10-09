# forEach 与 async/await

```js
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
async function test () {
  var nums = await getNumbers()
  asyncForEach(nums, async x => {
    var res = await multi(x)
    console.log(res)
  })
}
```

那么如保证在 `asyncForEach` 执行完成之后再执行下一句呢？

```js
async function foo(data) {
  await Promise.resolve(data.forEach())
}
```


## 参考

- [当 async/await 遇上 forEach](https://objcer.com/2017/10/12/async-await-with-forEach/)
- [Using async/await with a forEach loop](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)
- [async/await 与 forEach 问题](https://segmentfault.com/q/1010000009190129)
