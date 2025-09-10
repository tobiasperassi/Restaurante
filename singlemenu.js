const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");
const imagens = ["../Imagens/imagem2.jpg", "../Imagens/imagem3.jpg", "../Imagens/imagem4.jpg", "../Imagens/imagem5.png", "../Imagens/imagem6.jpg", "../Imagens/imagem7.jpg", ]

function buscarProdutos(){
    fetch("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.error){
                document.getElementById("produtos-container").innerHTML = "<h1>Produto não encontrado</h1>"
            } else{
                const itens = data[categoria].menu_items;
                let i = 0
                let html = "";
                itens.forEach(item => {
                    const img = imagens[i % imagens.length]
                    html += `
                    <div class="col-md-6 d-flex">
                        <div class="row g-3 align-items-center">
                            <div class="col-sm-5 text-center">
                                <img src="${img}" alt="${item.name}" class="img-fluid rounded shadow">
                                <div class="fw-bold mt-2">
                                    $${item.price_small} <small>(${item.small_portion_name})</small> &nbsp; $${item.price_large} <small>(${item.large_portion_name})</small>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <h5>${item.name}</h5>
                                <p>
                                    ${item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    `
                    i++
                })
                document.getElementById("produtos-container").innerHTML = html
            }
        })
    .catch(err => console.error("Erro ao buscar produtos:", err));
}
buscarProdutos()






