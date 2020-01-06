var articulos = ["zapatillas", "medias", "short", "remera"];
alert(articulos.length);
articulos.unshift("pelota"); //agrega al comienzo
alert(articulos.length);
articulos.push("gorra"); //agrega al final
articulos.push(prompt("Ingresar un artículo"));
alert("Borrando primer elemento");
articulos.shift(); //borra primer elemento
alert("Borrando el último elemento");
articulos.pop();