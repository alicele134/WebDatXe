// Call List of requests 
loadRequestFromApp1();

function loadRequestFromApp1() {
	axios.get('http://localhost:3000/api/locationidentifer')
    .then(function(response){
    	
        var source = document.getElementById("client-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(response.data);
        $('#clients').html(html);

       

       //  //Lấy tọa độ của data
      	// axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      	// 	params: {
		     //    address: "197 Nguyễn Tri Phương, phường 9, quận 5, tp HCM, Việt Nam",
		     //    key: "AIzaSyD8bQzMru84BpSm9d9pl6bNWn8U10Ru9U0"
      	// 	}
      	// })
      	// .then(function(response){
      	// 	console.log("success roi");
      	// })
      	// .catch(function(err){
      	// 	console.log("err roi");
      	// 	console.log(err);
      	// })
    
    })
    .catch(function(err){
    	console.log("this is error");
    	console.log(err);
    })
}