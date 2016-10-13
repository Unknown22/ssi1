$(function(){
	$('button').click(function(){
		var username = $('#txtUsername').val();
		var password = $('#txtPassword').val();
		$.ajax({
			url: '/go',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});

function loadXMLDoc()
{
    var req = new XMLHttpRequest()
    req.onreadystatechange = function()
    {
        if (req.readyState == 4)
        {
            if (req.status != 200)
            {
                    
            }
            else
            {
                var response = JSON.parse(req.responseText)
                document.getElementById('answer').innerHTML = response.response
            }
        }
    }
    
    req.open('POST', '/ajax')
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    var username = document.getElementById('txtUsername').value
    var password = document.getElementById('txtPassword').value
    var postVars = 'username='+username+'&password='+password
    req.send(postVars)
        
    return false
}
