layer有很多提示框，但是我们使用最多的应该就几种，我这次做的自定义弹层是仿照美团外卖发红包的样式来的，本文使用的点击方法是angularjs：
###1.直接弹框提示
```
layer.msg("提示几秒自动消失");
```

###2.用户可点击确定和取消按钮
```
layer.msg("你还未加入会员，确定加入会员吗？", {
	time: 0
	,btn: ['确定', '取消']
	,yes: function(index){
	layer.close(index);
    }
}); 
```

###3.自定义弹框，这个有好几种写法，我提供一种我最喜欢的方式
```
<div id="red" style="background-color: white; border-radius: 10px; text-align: center; display: none;">
   <div style="padding: 3%;">
      <div><img src="img/redicon.jpg" align="absmiddle" width="60px" height="60px" /></div>
      <div style="font-size: 14px; padding-top: 15px;"><b>恭喜获得10个红包</b></div>
      <div style="font-size: 13px; padding-top: 5px;">分享给小伙伴，大家一起抢。</div>
   </div>
   <div style="height: 1px; background-color: #d5d5d5; margin-top: 10px;"></div>
   <div style="width: 100%; text-align: center;">
      <div style="float: left; width: 49.75%; height: 41px; padding-top: 10px;" ng-click="cancel()">取消</div>
      <div style="float: left; width: 1px; height: 41px; background-color: #d5d5d5;"></div>
      <div style="float: right; width: 49.75%; height: 41px; padding-top: 10px;" ng-click="sendRedpacket()">发红包</div>
      <div style="clear: both;"></div>
   </div>
  </div>
```
完整js代码：
```
var redIndex = 0;
 // 优惠券
 $scope.sendRed = function() {
    //页面层-红包
    redIndex = layer.open({
       type: 1,
       title: false,
       area: ['80%', ''], //宽高
       closeBtn: 0,
       shadeClose: false,
       skin: 'yourclass',
       content: $("#red")
    });
 }

 $scope.cancel = function() {
    console.log("取消");
    layer.close(redIndex);
 }

 $scope.sendRedpacket = function() {
    console.log("确定");
    layer.close(redIndex);
 }
```
注：最后的content中的id需要跟html中div的id一致。
页面效果是这样的：

![弹层.gif](http://upload-images.jianshu.io/upload_images/931698-bda2d5e63c215283.gif?imageMogr2/auto-orient/strip)

完整的h5代码在github上：

https://github.com/aiai5251/custom-layer
