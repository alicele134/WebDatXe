  // Call Geocode
 // geocode();

 function onclickbutton(address) {
      alert(address);
      // Dùng axios lấy thông tin location
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address,
            key: "AIzaSyD8bQzMru84BpSm9d9pl6bNWn8U10Ru9U0"
          }
      })
      .then(function(response) { // Nếu thành công
            console.log(response.data.results);
            var map;
            
            // Geometry
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var geometryOutput = `
                <ul class="list-group" >
                  <li id="lat" class="list-group-item"><strong>Latitude: </strong>${lat}</li> 
                  <li id="long" class="list-group-item"><strong>Longtitude: </strong>${lng}</li> 
                </ul>
              `;

            //Khai bao cac thuoc tinh của bản đồ
            var mapProp = {
                //Tam ban do, quy dinh boi kinh do va vi do
                center: new google.maps.LatLng(lat, lng),
                //set default zoom cua ban do khi duoc load
                zoom: 15,
                //Dinh nghia type
                mapTypeId: google.maps.MapTypeId.ROADMAP

                
            };

           
            

            
            

            // Neo bản đồ vào html
            map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var myLatLng = {lat, lng};
           
            // Đánh dấu núm đỏ
            var marker = new google.maps.Marker({
                map : map,
                position: myLatLng,
                draggable: true,
              // animation: google.maps.Animation.DROP
               // animation: google.maps.Animation.BOUNCE,
              
            });

            // To add the marker to the map, call setMap();
            //marker.setMap(mapProp);

            google.maps.event.addListener(marker, 'dragend', function() {
                
               marker.setAnimation(google.maps.Animation.DROP);
                
               var marker_pos=marker.getPosition();
                
                console.log('Marker getPosition():');
                console.log(marker_pos);
                
                $('#address-map').text(marker_pos.lat() + ", " + marker_pos.lng());
                
            });

            // Output to app
            //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
            document.getElementById('address-geometry').innerHTML = geometryOutput;
            

      })
      .catch(function(err) { // Nếu thất bại
          console.log("err")
          console.log(err);
      })
  }



//  function geocode(location) {

  //     // Địa chỉ truy tìm vị trí
  //     //var location = 'Ninh Thuận, Việt Nam';
  //   //var location = document.getElementById("address-map").innerHTML;
  //     var address = $('#address-map').val();

  //     console.log(location)

  //     // Dùng axios lấy thông tin location
  //     axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
  //         params: {
  //           address: address,
  //           key: "AIzaSyD8bQzMru84BpSm9d9pl6bNWn8U10Ru9U0"
  //         }
  //     })
  //     .then(function(response) { // Nếu thành công
  //           console.log("vao response")
  //           console.log(response);

  //           // Full Address
  //           var formattedAddress = response.data.results[0].formatted_address;
  //           var formattedAddressOutput = `
  //                 <ul class="list-group" >
  //                   <li class="list-group-item">${formattedAddress} </li> 
  //                 </ul>
  //               `;

  //           // address components
  //           var addressComponents = response.data.results[0].address_components;
  //           var addressComponentsOutput = '<ul class="list-group">';
  //           for (var i = 0; i < addressComponents.length; i++) {
  //             addressComponentsOutput += `
  //                 <li class="list-group-item"><strong>${addressComponents[i].types[0]} </strong> : ${addressComponents[i].long_name}</li>
  //             `;
  //           }
  //           addressComponentsOutput += '</ul>';

  //           // Geometry
  //           var lat = response.data.results[0].geometry.location.lat;
  //           var lng = response.data.results[0].geometry.location.lng;
  //           var geometryOutput = `
  //               <ul class="list-group" >
  //                 <li id="lat" class="list-group-item"><strong>Latitude: </strong>${lat}</li> 
  //                 <li id="long" class="list-group-item"><strong>Longtitude: </strong>${lng}</li> 
  //               </ul>
  //             `;

  //           //Khai bao cac thuoc tinh
  //           var mapProp = {
  //               //Tam ban do, quy dinh boi kinh do va vi do
  //               center: new google.maps.LatLng(lat, lng),
  //               //set default zoom cua ban do khi duoc load
  //               zoom: 10,
  //               //Dinh nghia type
  //               mapTypeId: google.maps.MapTypeId.ROADMAP
  //           };


  //           // // Đánh dấu marker
  //           // var marker= new google.maps.Marker({
  //           //  position:  myCenter
  //           // });

  //           //  marker.setMap(map);
  //           // google.maps.event.addDomListener(window, 'load', initialize);


  //           // Output to app
  //           //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
  //           var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  //           document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
  //           document.getElementById('address-components').innerHTML = addressComponentsOutput;
  //           document.getElementById('address-geometry').innerHTML = geometryOutput;

  //     })
  //     .catch(function(err) { // Nếu thất bại
  //         console.log("err")
  //         console.log(err);
  //     })
  // }

// $( "#geometric").click(function(address) {
//   alert("vao " + address);
// });

