app.controller("feed", ['$scope', function($scope) {
	//git collapse
	$scope.gitArrow = "keyboard_arrow_down";
	$scope.swapArrow = function() {
		if($scope.gitArrow == "keyboard_arrow_down")
			$scope.gitArrow = "keyboard_arrow_right";
		else
			$scope.gitArrow = "keyboard_arrow_down";
	}

	//git sumary
	$scope.gitSummarizeButton = "Summarize";
	$scope.gitSummary = false;
	$scope.gitSummarize = function() {
		if($scope.gitSummarizeButton == "Summarize") {
			$scope.gitSummarizeButton = "Show Full";
			$scope.gitSummary = true;
		} else {
			$scope.gitSummarizeButton = "Summarize";
			$scope.gitSummary = false;
		}
	}

	//git show more
	$scope.gitShowButton = "Show More";
	$scope.gitShowAmount = 3;
	$scope.show = function() {
		if($scope.gitShowButton == "Show More") {
			$scope.gitShowAmount += 3;
			if($scope.gitShowAmount == 12) {
				$scope.gitShowButton = "Show Less";
			}
		} else {
			$scope.gitShowAmount -= 3;
			if($scope.gitShowAmount == 3) {
				$scope.gitShowButton = "Show More";
			}
		}
	}
}]);