var data = [
    {
        'nombre':'Suiza',
        'color':'#ff4148',
        'imagen':'"https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-546434836.jpg?itok=LHhMxt6b"',
    },
    {
        'nombre':'Portugal',
        'color':'#45AA3D',
        'imagen':'"https://www.viajea.travel/wp-content/uploads/2019/11/Portugal.jpg"',
    },
    {
        'nombre':'Francia',
        'color':'#2A5489',
        'imagen':'"https://www.hola.com/imagenes//viajes/20200617170377/lugares-de-francia-patrimonio-de-la-humanidad-por-la-unesco/0-837-742/francia-patrimonio-mundial-t.jpg?filter=ds75"',
    },
    {
        'nombre':'Republica Checa',
        'color':'#72A9E6',
        'imagen':'"https://www.hola.com/imagenes//viajes/20200428166812/praga-ciudad-historica-maravillas-desde-mi-pantalla/0-817-199/praga-ciudad-historica-t.jpg?filter=ds75"',
    },
    {
        'nombre':'Moldavia',
        'color':'#e6d24d',
        'imagen':'"https://1.bp.blogspot.com/-gPAyUQ0c8Rw/WVwJ2-HNgQI/AAAAAAAADIw/JO5pqhVxfc0JNTrlcYubsVtG66iKAKsQgCPcBGAYYCw/s1600/Fotolia_116632531_Subscription_Monthly_M.jpg"',
    },{
        'nombre':'Países Bajos',
        'color':'#e67832',
        'imagen':'"https://www.ambientum.com/wp-content/uploads/2019/11/holanda-amsterdam-696x464.jpg"',
    },{
        'nombre':'Bélgica',
        'color':'#e67aa2',
        'imagen':'"https://static2.ideal.es/www/multimedia/201803/01/media/cortadas/belgica-kaqE-U501116006373NsD-624x385@Ideal.jpg"',
    },
];

//    var cartas = document.getElementsByClassName('cardBox');
var container= document.getElementById('container');



for(var i = 0; i < data.length; i++){
    var carta = document.createElement("div");
    carta.className = 'cardBox';
    carta.style.color = data[i].color;
    carta.style.backgroundImage = 'url(' + data[i].imagen +')';

    //Creamos fondo de color
    var fondo = document.createElement("div");
    fondo.className = 'fondo';
    fondo.style.backgroundColor = data[i].color;
    carta.appendChild(fondo);

    //Div superior de color blanco
    var blancoSuperior = document.createElement("div");
    blancoSuperior.className = 'detalleBlanco';
    carta.appendChild(blancoSuperior);

    console.log('carta ---> ' , carta);

    var texto = document.createElement("div");
    texto.className = 'text';

    var titulo = document.createElement("span");
    titulo.className = 'title';
    titulo.textContent = data[i].nombre;
    titulo.style.color = data[i].color;

    texto.appendChild(titulo);
    carta.appendChild(texto);

    //Añadimos todos los nodos al contendor
    container.appendChild(carta);
}


//    var texto = cartas[2].getElementsByClassName('text')[0];
//    var titulo = texto.getElementsByClassName('title')[0];
//
//    titulo.textContent = 'Francia';
//
//    titulo.style.color = "blue";

//    div.pseudoStyle("before","color","purple");

