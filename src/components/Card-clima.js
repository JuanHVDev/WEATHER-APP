const CardClima = () => {
    const div = document.createElement('div');
    const divText = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('resultado');
    p.textContent = 'Aqui Aparecera tu País';
    divText.appendChild(p);
    div.appendChild(divText);
    return div;
};

export default CardClima;
