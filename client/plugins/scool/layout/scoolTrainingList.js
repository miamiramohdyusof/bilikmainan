Template.scoolTrainingList.rendered = function(){

}

Template.scoolTrainingList.helpers({
	trainings: function(){
		return Scool_Trainings.find({}, {
	      sort: { start: -1 }
	    });
		// Meteor.call('getTrainingList', function(error, results) {
		// 	if (error){
		// 		console.log("error:" + error);
		// 	}
		// 	if(results){
		// 		console.log(results);

		// 		var trainings = results.data;
		//         console.log(trainings.length); 

		//         return trainings;
		//     }
	 //    });
	}
});