// pages/post/post.js
var postsData = require('../../data/posts-data.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {

        bannerList: [{
            src: "/images/wx.png"
        },
        {
            src: "/images/vr.png"
        },
        {
            src: "/images/iqiyi.png"
        }

        ]
    },
    onPostTap: function (event) {
        console.log(event.currentTarget.dataset);
        wx.navigateTo({
            url: "/pages/post-detail/post-detail?postId="+ event.currentTarget.dataset.postId
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            postList: postsData.postList
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})