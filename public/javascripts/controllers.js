var app = angular.module("myapp", []);


app.controller('controller',function($scope,$http){

	$scope.messages = ["hello","How are ya??"];
	$scope.onClick = function() {
		console.log($scope.mes);
		$http.post("http://localhost:3000/",{message:$scope.mes})
			.then(function(response){ //use the term response for data from server for consistency
				console.log(response.data);
			})
			.catch(function(data){
				console.log("errorOccured :(  !!!!!!!");
			});
	}

});


