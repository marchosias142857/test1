把以下三个图片放到网站根目录：

image1.jpg  页面顶部图片
image2.jpg  页面下方图片
image3.png  桌面图标

部署到 Render 后：
Safari -> 分享 -> 添加到主屏幕

以后从桌面图标进入，就是独立 Web App（standalone），不会显示 Safari 工具栏和网址栏。
如果图片不是 jpg/png，请同步修改 index.html、sw.js、manifest.webmanifest 中对应文件名。
