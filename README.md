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