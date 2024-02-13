document.getElementById('wishes-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const wish = document.getElementById('wish').value;

  const wishesContainer = document.getElementById('wishes-container');
  const newWishSection = document.createElement('section');
  newWishSection.classList.add('user-wish');

  const userName = document.createElement('h3');
  userName.textContent = name;
  const userWish = document.createElement('p');
  userWish.textContent = wish;

  newWishSection.appendChild(userName);
  newWishSection.appendChild(userWish);

  wishesContainer.appendChild(newWishSection);

  document.getElementById('name').value = '';
  document.getElementById('wish').value = '';
});

document.getElementById("confettiHeader").addEventListener("click", explodeConfetti);
  function explodeConfetti() {
      const canvas = document.getElementById("confettiCanvas");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const confettiCount = 200;
      const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"];
      function createConfetti() {
          return {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height * 0.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              size: Math.random() * 5 + 5,
              angle: Math.random() * 360,
              speed: Math.random() * 5 + 1,
              rotation: Math.random() * 4 - 2,
          };
      }
      const confetti = Array.from({ length: confettiCount }, createConfetti);
      function drawConfetti(particle) {
          ctx.beginPath();
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.rect(particle.x, particle.y, particle.size, particle.size);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.rotate((-particle.rotation * Math.PI) / 180);
      }
      function updateConfetti(particle) {
          particle.x += Math.cos((particle.angle * Math.PI) / 180) * particle.speed;
          particle.y += Math.sin((particle.angle * Math.PI) / 180) * particle.speed;
          particle.angle += particle.rotation;
          if (particle.y > canvas.height) {
              particle.y = 0;
          }
      }
      function animateConfetti() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          confetti.forEach((particle) => {
              updateConfetti(particle);
              drawConfetti(particle);
          });
          requestAnimationFrame(animateConfetti);
      }
      animateConfetti();
}

document.getElementById("confettiHeader").addEventListener("click", function() {
  playHappyBirthdaySong();
});

function playHappyBirthdaySong() {
  const audio = new Audio('Happy Birthday Song.mp3');
  audio.play();
}

