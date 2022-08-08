const Formulario = () => {
  const formulario = document.createElement('form');
  const textBusqueda = document.createElement('label');
  textBusqueda.setAttribute('for', 'text-busqueda');
  textBusqueda.classList.add('text-busqueda');
  textBusqueda.textContent = 'Buscar:';
  const busqueda = document.createElement('input');
  busqueda.setAttribute('type', 'text');
  busqueda.classList.add('input-busqueda');
  const buttonBuscar = document.createElement('button');
  buttonBuscar.textContent = 'Buscar';
  buttonBuscar.classList.add('button-buscar');
  formulario.append(textBusqueda, busqueda, buttonBuscar);
  return formulario;
};

export default Formulario;
