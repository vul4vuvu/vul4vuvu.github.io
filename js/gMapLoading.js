function initMap() {
              var uluru = {lat: 25.033056, lng: 121.547942};
              
              //var uluru = {lat = 25.32, lng: 121.5};
              var map = new google.maps.Map(document.getElementById('test_map'), {
                    zoom: 16,
                    center: uluru
                  });
              var marker = new google.maps.Marker({
                position: uluru,
                map: map
              });
            }

window.addEventListener("load", function () {
  initMap();
})