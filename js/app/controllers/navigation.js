app.controller("navigation", ['$scope', function($scope) {
	$scope.pages = [
		["Home", "/index.html"],
		["Projects", "/projects.html"],
		["Resume", "/resume.html"],
		["Contact", "/contact.html"]
	];
}]);