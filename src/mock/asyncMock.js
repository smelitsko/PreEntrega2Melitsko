const products = [
    {
      codigo: 1,
      titulo: "Las niñas del naranjel",
      autor: "Gabriela Cabezón Cámara",
      editorial: "Random House",
      genero: "ficción latinoamericana",
      precio: 18200,
      stock: 10,
      img: "las-ninas-del-naranjel.png"
    },
    {
      codigo: 2,
      titulo: "La paciencia del agua sobre cada piedra",
      autor: "Alejandra Kamiya",
      editorial: "Eterna Cadencia",
      genero: "ficción latinoamericana",
      precio: 15000,
      stock: 4,
      img: "la-paciencia-del-agua.jpg"
    },
    {
      codigo: 3,
      titulo: "El ruido de una época",
      autor: "Ariana Harwicz",
      editorial: "Marciana",
      genero: "no ficción",
      precio: 11890,
      stock: 6,
      img: "el-ruido-de-una-epoca.jpg"
    },

    {
      codigo: 4,
      titulo: "Las primas",
      autor: "Aurora Venturini",
      editorial: "Tusquets",
      genero: "ficción latinoamericana",
      precio: 23000,
      stock: 8,
      img: "las-primas.jpg"
    },
    {
      codigo: 5,
      titulo: "Las malas",
      autor: "Camila Sosa Villada",
      editorial: "Tusquets",
      genero: "ficción latinoamericana",
      precio: 24000,
      stock: 3,
      img: "las-malas.jpg"
    },

    {
      codigo: 6,
      titulo: "La belleza del marido",
      autor: "Anne Carson",
      editorial: "Zindo & Gafuri",
      genero: "poesía",
      precio: 18200,
      stock: 4,
      img: "la-belleza-del-marido.jpg"
    },
    {
      codigo: 7,
      titulo: "Ultimos poemas en prozac",
      autor: "Fabián Casas",
      editorial: "Emece",
      genero: "poesía",
      precio: 12900,
      stock: 5,
      img: "ultimos-poemas-en-prozac.jpg"
    },
    {
      codigo: 8,
      titulo: "Libros chiquitos",
      autor: "Tamara Kamenszain",
      editorial: "Eterna Cadencia",
      genero: "poesía",
      precio: 9300,
      stock: 2,
      img: "libros-chiquitos.jpg"
    },
    {
      codigo: 9,
      titulo: "Un lugar soleado para gente sombría",
      autor: "Mariana Enríquez",
      editorial: "Anagrama",
      genero: "argentina",
      precio: 10000,
      stock: 10,
      img: "unlugar.jpg"
    },
    {
      codigo: 10,
      titulo: "Vida real",
      autor: "Brandon Taylor",
      editorial: "Chai editora",
      genero: "narrativa contemporánea",
      precio: 9300,
      stock: 9,
      img: "vidareal.jpg"
    },
    {
      codigo: 11,
      titulo: "La llamada",
      autor: "Leila Guerriero",
      editorial: "Anagrama",
      genero: "no ficción",
      precio: 15000,
      stock: 5,
      img: "lallamada.jpg"
    },
    {
      codigo: 12,
      titulo: "Cómo cocinar un lobo",
      autor: "Magalí Etchebarne",
      editorial: "Eterna Cadencia",
      genero: "narrativa argentina",
      precio: 9100,
      stock: 3,
      img: "cocinarunlobo.jpg"
    },
    {
      codigo: 13,
      titulo: "Cometierra",
      autor: "Dolores Reyes",
      editorial: "Eterna Cadencia",
      genero: "narrativa argentina",
      precio: 14000,
      stock: 8,
      img: "cometierra.jpg"
    },
    {
      codigo: 14,
      titulo: "En agosto nos vemos",
      autor: "Gabriel García Márquez",
      editorial: "Eterna Cadencia",
      genero: "narrativa latinoamericana",
      precio: 19000,
      stock: 5,
      img: "enagostonosvemos.jpg"
    },
    {
      codigo: 15,
      titulo: "Trilogía de la pasión",
      autor: "Ariana Harwicz",
      editorial: "Mardulce",
      genero: "narrativa contemporánea",
      precio: 20000,
      stock: 8,
      img: "trilogia.jpg"
    },
    {
      codigo: 16,
      titulo: "Poesía completa",
      autor: "Anne Sexton",
      editorial: "Eterna Cadencia",
      genero: "poesía",
      precio: 30000,
      stock: 5,
      img: "poesiasexton.jpg"
    },
    {
      codigo: 17,
      titulo: "El hombre en busca de sentido",
      autor: "Viktor Frankl",
      editorial: "Herder",
      genero: "no ficción",
      precio: 9300,
      stock: 4,
      img: "elhombrenbusca.jpg"
    },
    {
      codigo: 18,
      titulo: "Hábitos atómicos",
      autor: "James Clear",
      editorial: "Eterna Cadencia",
      genero: "no ficción",
      precio: 9300,
      stock: 10,
      img: "habitosatomicos.jpg"
    }
  ]

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === id));
      }, 2000);
    });
  };
