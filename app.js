function pesquisar() {
  // Função responsável por buscar e exibir os resultados da pesquisa.
  // Obtém a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se campoPesquisa for uma string vazia (se não houver nada no campo de pesquisa)
  if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada dado na lista de dados e constrói o HTML para cada resultado.
  for (let dado of dados) {
      // Utiliza o operador de encadeamento opcional (?) para evitar o erro se a propriedade não existir.
      let titulo = dado.titulo?.toLowerCase() || "";
      let descricao = dado.descricao?.toLowerCase() || "";
      let tags = dado.tags?.toLowerCase() || "";

      // Se o título, descrição ou tags incluírem o termo de pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria um novo elemento HTML para cada resultado
          resultados += `
          <div class="item-resultado">
              <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Saber Mais</a>
          </div>
          `;
      }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>";
  }
  
  // Atribui o HTML construído para a seção de resultados.
  section.innerHTML = resultados;
};