const divProductos = document.getElementById('root');
const contenedor = document.createElement('div');
divProductos.appendChild(contenedor);
var request = new XMLHttpRequest();

request.open('GET', 'https://api.peeknclean.com.gt/api/Producto?indicePagina=0&longitudPagina=0&tipoProducto', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(producto => {
            //se crea el div para la columna
            const card = document.createElement("div");
            card.setAttribute('class', 'small-12 medium-4 large-4 columns');
            //Se crea el card para pricing table
            const xcard = document.createElement("ul");
            xcard.setAttribute('class', 'pricing-table productoHover');
            card.appendChild(xcard);
            //Se crea el elemento li del nombre
            const itemNombre = document.createElement("li");
            itemNombre.setAttribute('class', 'title');
            itemNombre.innerHTML = producto.NombreProducto;
            xcard.appendChild(itemNombre);
            //Se crea el elemento li de la foto
            const itemliFoto = document.createElement("li");
            itemliFoto.setAttribute('class', 'picture');         
            xcard.appendChild(itemliFoto);
            //Se crea el elemento img dentro de li para la foto
            const itemFoto = document.createElement("img");
            itemFoto.setAttribute('class', 'imgProducto');
            itemFoto.src = producto.UrlImagen;
            itemliFoto.appendChild(itemFoto);

            //Se crea el elemento li del select de presentaciones
            const itemliSelectPresentaciones = document.createElement("li");
            itemliSelectPresentaciones.setAttribute('class', 'description presentacionesDrop');
            xcard.appendChild(itemliSelectPresentaciones);
            //se crea el elemento select dentro del li para presentaciones
            const itemSelectPresentaciones = document.createElement("select");
            itemliSelectPresentaciones.appendChild(itemSelectPresentaciones);

            //se recorren todas las presentaciones para pintar los elementos option del select
            producto.forEach(presentacion => {
                const itemOption = document.createElement("option");
                itemOption.value = presentacion.Nombre;
                itemSelectPresentaciones.appendChild(itemOption);
               
            });

           

           


            contenedor.appendChild(card);

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `El API, no funciona!`;
        app.appendChild(errorMessage);
    }
}

request.send();


