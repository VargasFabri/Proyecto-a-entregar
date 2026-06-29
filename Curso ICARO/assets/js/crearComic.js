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
         <div class="col-md-2">
          <div class="imagen">
            <img src="${comic.portada}" class="card-img-top">
            <div class="informacion">
             <h5>${comic.titulo}</h5>
             <p>${comic.categoria}</p>
            </div>
         </div>
        </div>`;
    });
}