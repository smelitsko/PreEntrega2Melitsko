const products = [
    {
      id: 1,
      titulo: "Las niñas del naranjel",
      autor: "Gabriela Cabezón Cámara",
      editorial: "Random House",
      category: "argentina",
      precio: 18200,
      stock: 10,
      img: "las-ninas-del-naranjel.png"
    },
    {
      id: 2,
      titulo: "La paciencia del agua sobre cada piedra",
      autor: "Alejandra Kamiya",
      editorial: "Eterna Cadencia",
      category: "argentina",
      precio: 15000,
      stock: 4,
      img: "la-paciencia-del-agua.jpg"
    },
    {
      id: 3,
      titulo: "El ruido de una época",
      autor: "Ariana Harwicz",
      editorial: "Marciana",
      category: "noficcion",
      precio: 11890,
      stock: 6,
      img: "el-ruido-de-una-epoca.jpg"
    },

    {
      id: 4,
      titulo: "Las primas",
      autor: "Aurora Venturini",
      editorial: "Tusquets",
      category: "argentina",
      precio: 23000,
      stock: 8,
      img: "las-primas.jpg"
    },
    {
      id: 5,
      titulo: "Las malas",
      autor: "Camila Sosa Villada",
      editorial: "Tusquets",
      category: "argentina",
      precio: 24000,
      stock: 3,
      img: "las-malas.jpg"
    },

    {
      id: 6,
      titulo: "La belleza del marido",
      autor: "Anne Carson",
      editorial: "Zindo & Gafuri",
      category: "poesia",
      precio: 18200,
      stock: 4,
      img: "la-belleza-del-marido.jpg"
    },
    {
      id: 7,
      titulo: "Ultimos poemas en prozac",
      autor: "Fabián Casas",
      editorial: "Emece",
      category: "poesia",
      precio: 12900,
      stock: 5,
      img: "ultimos-poemas-en-prozac.jpg"
    },
    {
      id: 8,
      titulo: "Libros chiquitos",
      autor: "Tamara Kamenszain",
      editorial: "Eterna Cadencia",
      category: "poesia",
      precio: 9300,
      stock: 2,
      img: "libros-chiquitos.jpg"
    },
    {
      id: 9,
      titulo: "Un lugar soleado para gente sombría",
      autor: "Mariana Enríquez",
      editorial: "Anagrama",
      category: "argentina",
      precio: 10000,
      stock: 10,
      img: "unlugar.jpg"
    },
    {
      id: 10,
      titulo: "Vida real",
      autor: "Brandon Taylor",
      editorial: "Chai editora",
      category: "extranjera",
      precio: 9300,
      stock: 9,
      img: "vidareal.jpg"
    },
    {
      id: 11,
      titulo: "La llamada",
      autor: "Leila Guerriero",
      editorial: "Anagrama",
      category: "noficcion",
      precio: 15000,
      stock: 5,
      img: "lallamada.jpg"
    },
    {
      id: 12,
      titulo: "Cómo cocinar un lobo",
      autor: "Magalí Etchebarne",
      editorial: "Eterna Cadencia",
      category: "argentina",
      precio: 9100,
      stock: 3,
      img: "cocinarunlobo.jpg"
    },
    {
      id: 13,
      titulo: "Cometierra",
      autor: "Dolores Reyes",
      editorial: "Eterna Cadencia",
      category: "argentina",
      precio: 14000,
      stock: 8,
      img: "cometierra.jpg"
    },
    {
      id: 14,
      titulo: "En agosto nos vemos",
      autor: "Gabriel García Márquez",
      editorial: "Eterna Cadencia",
      category: "extranjera",
      precio: 19000,
      stock: 5,
      img: "enagostonosvemos.jpg"
    },
    {
      id: 15,
      titulo: "Trilogía de la pasión",
      autor: "Ariana Harwicz",
      editorial: "Mardulce",
      category: "argentina",
      precio: 20000,
      stock: 8,
      img: "trilogia.jpg"
    },
    {
      id: 16,
      titulo: "poesia completa",
      autor: "Anne Sexton",
      editorial: "Lumen",
      category: "poesia",
      precio: 30000,
      stock: 5,
      img: "poesiasexton.jpg"
    },
    {
      id: 17,
      titulo: "El hombre en busca de sentido",
      autor: "Viktor Frankl",
      editorial: "Herder",
      category: "noficcion",
      precio: 9300,
      stock: 4,
      img: "elhombrenbusca.jpg"
    },
    {
      id: 18,
      titulo: "Hábitos atómicos",
      autor: "James Clear",
      editorial: "Eterna Cadencia",
      category: "noficcion",
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

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((product) => product.category === category));
      }, 2000);
    });
  };