app.controller("contact", ['$scope', function($scope) {
	//contact
	$scope.title = 'Contact - NickMckloski.com';
	$scope.formData = {};
	$scope.formProcessed = false;
	$scope.formSuccess = false;
	$scope.processForm = function() {
		//$scope.send($scope.formData.name, $scope.formData.email, $scope.formData.message);
		$scope.formProcessed = true;
		$scope.formSuccess = true;
	};
}]);