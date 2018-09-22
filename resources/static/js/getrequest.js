$(document).ready(() => {
	
	// get request
	$("#allUsers").click(event => {
		event.preventDefault();
		ajaxGet();
	});

	const ajaxGet = () => {
		$.ajax({
			type : "GET",
			url : "/api/users/all",
			success: result => {
				$('#getNames ul').empty();
				$.each(result, (index, user) => {
					$('#getNames .nameList').append(`<p>${user.firstname} ${user.lastname}</p>`)
				});
				console.log(`Success: ${result}`);
			},
			error : err => {
				$("#getNames").html(`<strong>Error</strong>`);
				console.log(`Error: ${err}`);
			}
		});	
	}
})