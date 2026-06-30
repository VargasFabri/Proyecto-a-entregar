const comics = [];

const formulario = document.getElementById('formulario')

formulario.addEventListener("submit", guardarComic);

function guardarComic(e){
    e.preventDefault()
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const portada = document.getElementById('portada').files[0];
    const lector = new FileReader();

    lector.readAsDataURL(portada);

    lector.onload = function() {
        const comic = {
            titulo,
            descripcion,
            categoria,
            portada: lector.result,
        };
        comics.push(comic);
        mostrarComics();
        formulario.reset();
    };
}

function mostrarComics(){
    const contenedor = document.getElementById('comicsCreados')
    contenedor.innerHTML = "";

    comics.forEach(comic => {
        contenedor.innerHTML += `
         <div class="col-xl-2 m-1">
          <div class="card">
            <img src="${comic.portada}" class="card-img-top">
            <div class="card-body">
             <h5>${comic.titulo}</h5>
             <strong class="card-text text-muted">${comic.categoria}</strong>
             <p class="card-text text-muted">${comic.descripcion}</p>
            </div>
         </div>
        </div>`;
    });
}