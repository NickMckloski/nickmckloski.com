app.controller("projects", ['$scope', function($scope) {
	//traffic
	$scope.trafficBaseUrl = "img/previews/traffictools";
	$scope.trafficCount = 10;
	$scope.trafficPics = [];
	for(i = 1; i <= $scope.trafficCount; i++) {
		$scope.trafficPics.push($scope.trafficBaseUrl+i+".png")
	}
	//gamestat
	$scope.gameBaseUrl = "img/previews/gamestat";
	$scope.gameStatCount = 3;
	$scope.gameStatPics = [];
	for(i = 1; i <= $scope.gameStatCount; i++) {
		$scope.gameStatPics.push($scope.gameBaseUrl+i+".png")
	}
	//rss
	$scope.rssBaseUrl = "img/previews/rss";
	$scope.rssCount = 3;
	$scope.rssPics = [];
	for(i = 1; i <= $scope.rssCount; i++) {
		$scope.rssPics.push($scope.rssBaseUrl+i+".png")
	}
	//budget
	$scope.budgetBaseUrl = "img/previews/budget";
	$scope.budgetCount = 3;
	$scope.budgetPics = [];
	for(i = 1; i <= $scope.budgetCount; i++) {
		$scope.budgetPics.push($scope.budgetBaseUrl+i+".png")
	}
	//bank app
	$scope.bankBaseUrl = "img/previews/bank";
	$scope.bankCount = 1;
	$scope.bankPics = [];
	for(i = 1; i <= $scope.bankCount; i++) {
		$scope.bankPics.push($scope.bankBaseUrl+i+".png")
	}
	//personal web
	$scope.personalWebBaseUrl = "img/previews/web";
	$scope.personalWebCount = 1;
	$scope.personalWebPics = [];
	for(i = 1; i <= $scope.personalWebCount; i++) {
		$scope.personalWebPics.push($scope.personalWebBaseUrl+i+".png")
	}
}]);