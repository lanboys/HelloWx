//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello, OOPcoder',
        start: 'come on baby'
    },
    //事件处理函数
    onStartTap: function() {
        wx.navigateTo({
            url: '../post/post'
        })
    }
})