function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum resoltado encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = ""; 
  
    // Itera sobre cada item de dado (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        // Cria o HTML para cada resultado, formatando com os dados do objeto
            resultados += `
                <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
     
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados gerados
    section.innerHTML = resultados;
  }