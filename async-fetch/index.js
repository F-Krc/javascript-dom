const modal = document.getElementById('myModal');

(async () => {
  await new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(modal);
    }, 1000 * 5);
  });
  try {
    console.log('User has been on the page for 5 seconds');
    modal.style.display = 'block';
    modal.addEventListener('click', (e) => {
      switch (e.target.className) {
        case 'close':
        case 'modal':
          modal.style.display = 'none';
          break;
      }
    });
  } catch (e) {
    alert('Error: bla bla');
  }
})();

const btn = document.getElementById('continue');

(async () => {
  await new Promise((resolve) => {
    btn.addEventListener('mouseover', () => {
      resolve(btn);
    });
  });
  try {
    btn.style.animation = 'none';
    btn.classList.add('bg-primary');
    alert('Continue to subscription');
  } catch (err) {
    alert('Error: bla bla');
  }
})();
