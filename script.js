const imagens = ["../Imagens/imagem2.jpg", "../Imagens/imagem3.jpg", "../Imagens/imagem4.jpg", "../Imagens/imagem5.png", "../Imagens/imagem6.jpg", "../Imagens/imagem7.jpg", ]

function buscarCategorias(){
    fetch("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.error){
                document.getElementById("categoria").innerHTML = "<h1>Categoria não encontrada</h1>"
            } else{
                let i = 0
                let html = "";
                for (const key in data){
                    const img = imagens[i % imagens.length]
                    html += `
                    <div class="col-12 col-sm-6 col-lg-3">
                        <a href="singleMenu.html?categoria=${key}" class="category-card">
                        <img src="${img}" alt="${data[key].category.name}" class="img-fluid">
                        <div class="category-title">${data[key].category.name}</div>
                        </a>
                    </div>
                    `
                    i++
                }
                document.getElementById("categorias-container").innerHTML = html
            }
        })
    .catch(err => console.error("Erro ao buscar categorias:", err));
}
buscarCategorias()