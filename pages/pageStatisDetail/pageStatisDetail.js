var data = {
    unfoldImgUrlPuv : '../../asserts/images/more_unfold.png',
    unfoldImgUrlUserAna : '../../asserts/images/more_unfold.png',
    unfoldImgUrlGiftDay : '../../asserts/images/more_unfold.png',
    unfoldImgUrlGiftTotal : '../../asserts/images/more_unfold.png',
    unfoldImgUrlPuvTotal : '../../asserts/images/more_unfold.png',
    tableShowPuv : 'block',
    tableShowPuvTotal : 'block',
    tableShowUserAna : 'block',
    tableShowGiftDay : 'block',
    tableShowGiftTotal : 'block',
};

Page({
    data : data,
    onLoad : function(query) {
        console.log(query.pageid);
        // wx.setNavigationBarTitle({
        //     title : "详细信息"
        // });
    },
    unfoldTable : function(event) {
        //改变折叠展开的图标
        if(this.data.unfoldImgUrlPuv == '../../asserts/images/more_fold.png') {
            this.setData({
                unfoldImgUrlPuv : '../../asserts/images/more_unfold.png'
            });
        }
        else {
            this.setData({
                unfoldImgUrlPuv : '../../asserts/images/more_fold.png'
            });
        }

        //要显示和隐藏的tab
        if(this.data.tableShowPuv == 'block') {
            this.setData({
                tableShowPuv : 'none'
            });
        }
        else {
            this.setData({
                tableShowPuv : 'block'
            });
        }
    },
    //折叠用户分析数据
    unfoldTableUserAna : function(event) {
        //改变折叠展开的图标
        if(this.data.unfoldImgUrlUserAna == '../../asserts/images/more_fold.png') {
            this.setData({
                unfoldImgUrlUserAna : '../../asserts/images/more_unfold.png'
            });
        }
        else {
            this.setData({
                unfoldImgUrlUserAna : '../../asserts/images/more_fold.png'
            });
        }

        //要显示和隐藏的tab
        if(this.data.tableShowUserAna == 'block') {
            this.setData({
                tableShowUserAna : 'none'
            });
        }
        else {
            this.setData({
                tableShowUserAna : 'block'
            });
        }
    },
    //折叠用户分析数据
    unfoldTableGiftDay : function(event) {
        //改变折叠展开的图标
        if(this.data.unfoldImgUrlGiftDay == '../../asserts/images/more_fold.png') {
            this.setData({
                unfoldImgUrlGiftDay : '../../asserts/images/more_unfold.png'
            });
        }
        else {
            this.setData({
                unfoldImgUrlGiftDay : '../../asserts/images/more_fold.png'
            });
        }

        //要显示和隐藏的tab
        if(this.data.tableShowGiftDay == 'block') {
            this.setData({
                tableShowGiftDay : 'none'
            });
        }
        else {
            this.setData({
                tableShowGiftDay : 'block'
            });
        }
    },
    //折叠用户分析数据
    unfoldTableGiftTotal : function(event) {
        //改变折叠展开的图标
        if(this.data.unfoldImgUrlGiftTotal == '../../asserts/images/more_fold.png') {
            this.setData({
                unfoldImgUrlGiftTotal : '../../asserts/images/more_unfold.png'
            });
        }
        else {
            this.setData({
                unfoldImgUrlGiftTotal : '../../asserts/images/more_fold.png'
            });
        }

        //要显示和隐藏的tab
        if(this.data.tableShowGiftTotal == 'block') {
            this.setData({
                tableShowGiftTotal : 'none'
            });
        }
        else {
            this.setData({
                tableShowGiftTotal : 'block'
            });
        }
    },
    //折叠用户分析数据
    unfoldTablePuvTotal : function(event) {
        //改变折叠展开的图标
        if(this.data.unfoldImgUrlPuvTotal == '../../asserts/images/more_fold.png') {
            this.setData({
                unfoldImgUrlPuvTotal : '../../asserts/images/more_unfold.png'
            });
        }
        else {
            this.setData({
                unfoldImgUrlPuvTotal : '../../asserts/images/more_fold.png'
            });
        }

        //要显示和隐藏的tab
        if(this.data.tableShowPuvTotal == 'block') {
            this.setData({
                tableShowPuvTotal : 'none'
            });
        }
        else {
            this.setData({
                tableShowPuvTotal : 'block'
            });
        }
    }
});
