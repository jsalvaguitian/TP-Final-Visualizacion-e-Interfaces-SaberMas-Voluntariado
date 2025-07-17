const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  const track = document.getElementById('categoriaTrack');

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
  });

  const carrouselContainer = document.getElementById('carrousel-cards');
const flechaIzq = document.getElementById('flechaIzq');
const flechaDer = document.getElementById('flechaDer');


flechaDer.addEventListener("click", () => {
  const firstCard = carrouselContainer.querySelector('.card');
  
  // Animación opcional (deslizamiento)
  carrouselContainer.style.transition = 'transform 0.3s ease-in-out';
  carrouselContainer.style.transform = 'translateX(-320px)';

  setTimeout(() => {
    carrouselContainer.style.transition = 'none';
    carrouselContainer.style.transform = 'translateX(0)';
    carrouselContainer.appendChild(firstCard);
  }, 300);
});

flechaIzq.addEventListener("click", () => {
  const cards = carrouselContainer.querySelectorAll('.card');
  const lastCard = cards[cards.length - 1];

  carrouselContainer.style.transition = 'none';
  carrouselContainer.prepend(lastCard);
  carrouselContainer.style.transform = 'translateX(-320px)';

  setTimeout(() => {
    carrouselContainer.style.transition = 'transform 0.3s ease-in-out';
    carrouselContainer.style.transform = 'translateX(0)';
  }, 10);
});