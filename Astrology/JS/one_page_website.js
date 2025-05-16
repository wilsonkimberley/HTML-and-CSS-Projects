// Lightbox modal functionality
let slideIndex = 1;

function openModal() {
  document.getElementById("myModal").style.display = "block";
  showSlides(slideIndex);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Form submission handler
document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const birthdate = this.birthdate.value;

  if (!name || !email || !birthdate) {
    alert("Please fill out all fields.");
    return;
  }

  // For demo: Just show message and reset form
  const message = `Thanks for signing up, ${name}! We will send your horoscope updates to ${email}.`;
  document.getElementById("form-message").textContent = message;

  this.reset();
});
