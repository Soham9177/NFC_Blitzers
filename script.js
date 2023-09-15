document.getElementById('animateButton').addEventListener('click', animateGraph);

function animateGraph() {
  const user1Bar = document.querySelector('.user1');
  const user2Bar = document.querySelector('.user2');

  user1Bar.style.animation = 'growUser1 2s forwards';
  user2Bar.style.animation = 'growUser2 2s forwards';
}
