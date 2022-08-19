
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

document.querySelector('.first-button').addEventListener('click', function () {

  document.querySelector('.animated-icon1').classList.toggle('open');
  });
  document.querySelector('.second-button').addEventListener('click', function () {
  
  document.querySelector('.animated-icon2').classList.toggle('open');
  });
  document.querySelector('.third-button').addEventListener('click', function () {
  
  document.querySelector('.animated-icon3').classList.toggle('open');
  });