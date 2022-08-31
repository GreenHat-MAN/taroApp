export default defineAppConfig({
  pages: [
    'pages/home/home',
    "pages/mine/mine",
    'pages/search/search'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
		color: "#888",
		selectedColor: "#d43c33",
		backgroundColor: "#fff",
		borderStyle: "black",
		list: [
			{
				pagePath: "pages/home/home",
				text: "主页",
				iconPath: "static/imgs/home.png",
				selectedIconPath: "static/imgs/home-on.png"
			},
			{
				pagePath: "pages/search/search",
				text: "搜索",
				iconPath: "static/imgs/video.png",
				selectedIconPath: "static/imgs/video-on.png"
			},
			{
				pagePath: "pages/mine/mine",
				text: "我的",
				iconPath: "static/imgs/mine.png",
				selectedIconPath: "static/imgs/mine-on.png"
			}
		]
	},
})
