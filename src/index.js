import './styles.css';
import Title from './components/portada';
import Formulario from './components/formulario';
const divPrincipal = document.querySelector('.root')

divPrincipal.append(Title(), Formulario())

// fetch(url).then(res=>res.json()).then(({name, main:{temp}, sys:{country}})=>console.log(name, temp, country))

const formulario = document.querySelector('form')

window.addEventListener('load', ()=>{
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('.input-busqueda').value
    console.log(ciudad)
    if(ciudad === ''){
        alert('Ingresas la ciudad a buscar')
        return;
    }
    consultarAPI(ciudad)
}

function consultarAPI(ciudad){
    const API = '8bab29329a4074990e74a49b50f9c57f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&units=metric&appid=${API}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}
