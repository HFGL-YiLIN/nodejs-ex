$( document ).ready(function() {
	
	// get request
	$("#allUsers").click(function(event){
		event.preventDefault();
		ajaxGet();
	});

	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : "/api/users/all",
			success: function(result){
				$('#getNames ul').empty();
				$.each(result, function(i, user){
					$('#getNames .nameList').append(`${user.firstname} ${user.lastname} <br>`)
				});
				console.log(`Success: ${result}`);
			},
			error : function(e) {
				$("#getNames").html(`<strong>Error</strong>`);
				console.log(`ERROR: ${e}`);
			}
		});	
	}
})