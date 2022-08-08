const Title = () => {
  const div = document.createElement('div');
  const title = document.createElement('h1');
  title.innerHTML = 'WEATHER APP';
  title.classList.add('title');
  div.classList.add('portada');
  div.appendChild(title);
  return div;
};

export default Title;
