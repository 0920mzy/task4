var consumerUrl = 'http://localhost:5000/task'

function publishTask()
{
	e.preventDefault();
	 
	
	var taskId = document.getElementById('taskId').value;
	var description = document.getElementById('description').value;
	var priority = document.getElementById('priority').value;
	var status = document.getElementById('status').value;
	var customerId = document.getElementById('customerId').value;
	

	var data = {};
	data.taskId = taskId;
	data.description = description;
	data.priority = priority;
	data.status = status;
	data.customerId = customerId;
	
	
	axios.post(consumerUrl, data)
    .then(response => {
    	 console.log(`User is successfully signed in.`, response.data);
    	 alert("Successfully signed in. click OK to redirect.");
    		 setTimeout(function(){
    			    window.location.href = 'index.html';
    			}, 1000);
    })
    .catch(error => { alert("Server Issue!"); console.error(error);});
	return false;
}