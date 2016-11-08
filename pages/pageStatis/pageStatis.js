Page({
    gotoDetail : function(event) {
        console.log(event);
        console.log(event.currentTarget.dataset);
        var pageid = event.currentTarget.dataset.pageid;
        console.log(pageid);
        var url =  '../pageStatisDetail/pageStatisDetail?pageid='+pageid;
        console.log(url);
        wx.navigateTo({
            url : url
        });
    },
    changePosition : function() {
        this.setData({
            marginRight : '30px'
        });
    }
});
