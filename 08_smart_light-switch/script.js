const container = document.querySelector('.container');
const bulb = document.getElementById('bulb');
const button = document.getElementById('switch');
button.textContent = 'Turn ON';

button.addEventListener('click', (e) => {
  if (container.classList.contains('on')) {
    container.classList.remove('on');
    bulb.setAttribute('src', 'assets/bulb-off.png');
    e.target.textContent = 'Turn ON';
  } else {
    container.classList.add('on');
    bulb.setAttribute('src', 'assets/bulb-on.png');
    e.target.textContent = 'Turn OFF';
  }
});
