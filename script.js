const divProductos = document.getElementById("divProductos")

fetch('./json/productos.json')
 .then(response => response.json())
 .then(productos => {
     productos.forEach((item,  indice )=> {
        console.log(item);
        divProductos.innerHTML += `
            <div class="card" id="item${indice} style="width: 18rem;margin:3px;">
            <img src="./img/${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Talle: ${item.talle}</p>   
                    <p class="card-text">Precio: $${item.precio}</p>   
                    <button class="btn btn-dark">Agregar al Carrito</button>
                </div>
            </div>
        
        `
    });
 }) 