// Google maps
let map;
let marker;
let loc = { lat: 44.397, lng: 18.644 };

function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 15,
  });

  marker = new google.maps.marker({
    position: loc,
    map: map,
  });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});