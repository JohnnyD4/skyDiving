 $(document).ready(function() {



 	$("#reserveBtn").on("click", function(e) {

 		e.preventDefault();

	 	var newGuest = {
	 		
	 		name: $("#userName").val().trim();

	 		phone: $("#userNumber").val().trim(); 		
	 	};

	 	$.post("/api/new", newGuest)
	 	.done(function(data) {
	 		alert("added guest");
	 	})


 	})
 	


 })