$(document).ready(() => {
	
    $("#userForm").submit(event => {
		// prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    const ajaxPost = () => {
    	
    	// prepare form data
    	const formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}
    	
    	// post request
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/api/users/save",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : user => {
				$("#postNames").html(`Well Done! Bro ${user.firstname} ${user.lastname}!`);
			},
			error : err => {
				alert(`Error!`)
				console.log(`Error: ${err}`);
			}
		});
    	
    	resetData();
 
    }
    
    const resetData = () => {
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
})