angular.module("matchesControllers", ["matchesServices", "newsServices", "myApp.config"])
.controller("matchesSummaryController", ["$scope", "allMatchesService",
	function($scope, allMatchesService) {
		$scope.matchesSummary = {status: 'loading'};
		// call service to get model
		allMatchesService.getMatchesSummary(function(matchesSummary) {
			// set model in scope to share with view
			$scope.matchesSummary = matchesSummary;
		});
	}
])
.controller("newsSummaryController", ["$scope", "allNewsService",
	function($scope, allNewsService) {
		$scope.newsSummary = {status: 'loading'};
		// call service to get model
		allNewsService.getNewsSummary(function(newsSummary) {
			// set model in scope to share with view
			console.log(newsSummary);
			$scope.newsSummary = newsSummary;

		});
	}
]);