$( document ).ready(function() {
	
    $("#userForm").submit(function(event) {
		// prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// prepare form data
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}
    	
    	// post request
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/users/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(user) {
				$("#postNames").html(`Well Done! Bro ${user.firstname} ${user.lastname}!`);
			},
			error : function(e) {
				alert(`Error!`)
				console.log(`ERROR: ${e}`);
			}
		});
    	
    	resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
})