const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  const track = document.getElementById('categoriaTrack');

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
  });