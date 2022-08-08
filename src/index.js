import './styles.css';
import Swal from 'sweetalert2';
import Title from './components/portada';
import Formulario from './components/formulario';
import CardClima from './components/Card-clima';

const container = document.querySelector('.container');
container.append(Title(), Formulario(), CardClima());

// fetch(url).then(res=>res.json()).then(({name, main:{temp}, sys:{country}})=>console.log(name, temp, country))

const formulario = document.querySelector('form');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('.input-busqueda').value;
    if (ciudad === '') {
        Swal.fire({
            icon: 'error',
            title: 'Ciudad Erronea',
            text: 'Los campos deben de estar completos, verifique por favor',
        });
        return;
    }
    console.log(ciudad);
    consultarAPI(ciudad);
    formulario.reset();
}

function consultarAPI(ciudad) {
    const API = '8bab29329a4074990e74a49b50f9c57f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&units=metric&appid=${API}`;
    Spinner();
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            resetearHtml();
            if (data.cod === '404') {
                Swal.fire({
                    icon: 'info',
                    title: 'Ciudad no encontrada',
                    text: 'La ciudad que busca no se encuentra, verificar su informacion',
                });
            } else {
                mostrarClima(data);
            }
        })
        .catch((err) => console.log(err));
}

function mostrarClima(data) {
    const {
        name,
        main: { temp, temp_max: tempMax, temp_min: tempMin },
        weather: [{icon}]
    } = data;
    console.log(icon)
    const resultado = document.querySelector('.resultado');
    const ciudadClima = document.createElement('div');
    ciudadClima.classList.add('card-clima');
    const title = document.createElement('p');
    title.textContent = `Clima en ${name}`;
    title.classList.add('name-ciudad');
    const temperatura = document.createElement('p');
    temperatura.textContent = `Temperatura: ${Math.round(temp)}℃`;
    const temperaturaMax = document.createElement('p');
    temperaturaMax.textContent = `Max: ${Math.round(tempMax)}℃`;
    const temperaturaMin = document.createElement('p');
    temperaturaMin.textContent = `Min: ${Math.round(tempMin)}℃`;
    const icono = document.createElement('img');
    icono.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    icono.classList.add('img-weather')
    ciudadClima.appendChild(title);
    ciudadClima.appendChild(icono)
    ciudadClima.appendChild(temperatura);
    ciudadClima.appendChild(temperaturaMax);
    ciudadClima.appendChild(temperaturaMin);
    resultado.appendChild(ciudadClima);
}

function resetearHtml() {
    const resultado = document.querySelector('.resultado');
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner() {
    resetearHtml();
    const resultado = document.querySelector('.resultado');
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');
    resultado.appendChild(divSpinner);
}
