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

* 4.真是太不有好了，设置了 内容的 contentEditable 会出现问题
> 光标问题，另外此问题用下列方法解决之后还不能用 win10 自带的输入法。
我该说是  win10 坑爹呢，还是 contentEditable 坑爹呢。

```
this.editBox.current.focus();  
var range = window.getSelection();
range.selectAllChildren(this.editBox.current); 
range.collapseToEnd();
```

* 5.要注意，txt有时候不是 'utf-8' 的格式。乱码问题找编码格式就对了.


### 本次学到了

* Axios 的 GET 方法，真是十分操蛋了，它的参数格式时候   `Axios.get(url, {params: {data}})`
> 其中的 params 切记要为对象。服务器受到的东西是  {data} 里面的 data。不是 {data}。


### 备注可优化
> 毕业设计要交稿了，这东西没法完善了，时间不够，技术太烂。

* 1.数据库处可以给 Schema 定义静态方法，而不是直接使用 古老的 find 方法查询
* 2.登录注册等共享信息可以用 redux/mobx， 而不是直接使用 localStorage
* 3.后台的错误返回信息可以统一封装的，而不是每一个地方都写一段长长的代码。

* 4.虽然说有悖于 前端模块化，不应该整体刷新，但是可以考虑再 登录/注册 采用整体刷新，此条与第2条处同一方案。
> 修改 2 后，4就不需要了

* 5.前端接收到的所有的错误返回信息可以封装成一个函数，写在一个公共函数中.
* 6.很多关于颜色的设计可以做成 渐变的，可以更好看。同时，可以做成随机的。
