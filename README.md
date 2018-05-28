### 遇见的问题记录

* 1.Antd的引入和 less-loader 的冲突问题
> 解决方案：https://segmentfault.com/q/1010000011915034

需要分别写 less 和 css 的解析，分开写
```
    {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
            loader: 'css-loader', options: {modules: false}
            },
            'less-loader'
        ]
    },
```

* 2.React-router-dom 自路由等待修改.

* 3.markdown编译之后的英文并没有换行.
> 原因： 英文字母之间如果没有空格,系统认为这是一个单词,就不会自动换行.汉字就没有这种情况.

```
word-wrap: break-word;
```