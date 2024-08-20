document.addEventListener('DOMContentLoaded', function () {
  const typewriterElement = document.getElementById('typewriter');
  const typewriterText = "Web Developer";
  let index = 0;

  function typeWriter() {
      if (index < typewriterText.length) {
          typewriterElement.innerHTML += typewriterText.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
      } else {
          setTimeout(() => {
              typewriterElement.classList.toggle('blink');
          }, 500);
      }
  }

  typeWriter();
});
