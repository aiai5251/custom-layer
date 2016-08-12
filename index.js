var app = angular.module("customlayer", []);
app.controller("index", function($scope, $http) {
	var redIndex = 0;
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

});