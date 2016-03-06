app.controller("projects", ['$scope', function($scope) {
	//traffic
	$scope.trafficThumbnailUrl = "img/previews/thumbnails/traffictools";
	$scope.trafficBaseUrl = "img/previews/traffictools";
	$scope.trafficCount = 10;
	$scope.trafficThumbnails = [];
	$scope.trafficPics = [];

	for(i = 1; i <= $scope.trafficCount; i++) {
		$scope.trafficThumbnails.push($scope.trafficThumbnailUrl+i+".png");
		$scope.trafficPics.push($scope.trafficBaseUrl+i+".png");
	}
	//gamestat
	$scope.gameThumbnailUrl = "img/previews/thumbnails/gamestat";
	$scope.gameBaseUrl = "img/previews/gamestat";
	$scope.gameStatCount = 3;
	$scope.gameStatThumbnails = [];
	$scope.gameStatPics = [];
	for(i = 1; i <= $scope.gameStatCount; i++) {
		$scope.gameStatThumbnails.push($scope.gameThumbnailUrl+i+".png");
		$scope.gameStatPics.push($scope.gameBaseUrl+i+".png");
	}
	//rss
	$scope.rssThumbnailUrl = "img/previews/thumbnails/rss";
	$scope.rssBaseUrl = "img/previews/rss";
	$scope.rssCount = 3;
	$scope.rssThumbnails = [];
	$scope.rssPics = [];
	for(i = 1; i <= $scope.rssCount; i++) {
		$scope.rssThumbnails.push($scope.rssThumbnailUrl+i+".png");
		$scope.rssPics.push($scope.rssBaseUrl+i+".png");
	}
	//budget
	$scope.budgetThumbnailUrl = "img/previews/thumbnails/budget";
	$scope.budgetBaseUrl = "img/previews/budget";
	$scope.budgetCount = 3;
	$scope.budgetThumbnails = [];
	$scope.budgetPics = [];
	for(i = 1; i <= $scope.budgetCount; i++) {
		$scope.budgetThumbnails.push($scope.budgetThumbnailUrl+i+".png");
		$scope.budgetPics.push($scope.budgetBaseUrl+i+".png");
	}
	//bank app
	$scope.bankThumbnailUrl = "img/previews/thumbnails/bank";
	$scope.bankBaseUrl = "img/previews/bank";
	$scope.bankCount = 1;
	$scope.bankThumbnails = [];
	$scope.bankPics = [];
	for(i = 1; i <= $scope.bankCount; i++) {
		$scope.bankThumbnails.push($scope.bankThumbnailUrl+i+".png");
		$scope.bankPics.push($scope.bankBaseUrl+i+".png");
	}
	//personal web
	$scope.personalWebThumbnailsUrl = "img/previews/thumbnails/web";
	$scope.personalWebBaseUrl = "img/previews/web";
	$scope.personalWebCount = 1;
	$scope.personalWebThumbnails = [];
	$scope.personalWebPics = [];
	for(i = 1; i <= $scope.personalWebCount; i++) {
		$scope.personalWebThumbnails.push($scope.personalWebThumbnailsUrl+i+".png");
		$scope.personalWebPics.push($scope.personalWebBaseUrl+i+".png");
	}
}]);