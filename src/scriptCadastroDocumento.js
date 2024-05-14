
const documentoForm = document.getElementById('documentoForm');

var idUsuario;

    var campoMatricula = document.getElementById('MatriculaUsuario');
    var campoNomeCompleto = document.getElementById('NomeClompletoUsuario');
  
    campoMatricula.addEventListener('blur', function() {
        var matricula = campoMatricula.value;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8082/v1/user/buscar/' + matricula + '/matricula', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var usuario = JSON.parse(xhr.responseText);
                    campoNomeCompleto.value = usuario.nome;
                    idUsuario =  usuario.id
                } else {
                    console.error('Erro ao buscar usuário:', xhr.statusText);
                    alert('Erro ao buscar usuário. Por favor, tente novamente.');
                }
            }
        };
        xhr.send();
    });

    // Adicionando um event listener para limpar o campo de nome completo quando clicar fora do campo de matrícula
    campoMatricula.addEventListener('blur', function() {
        campoNomeCompleto.value = '';
    });



  documentoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    let descricao = ''; 

  // Itera sobre todos os elementos do formulário
  for (const input of documentoForm.elements) {
  // Verifica se o elemento é um input ou textarea e tem um ID e um valor
  if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && input.id && input.value) {
    // Adiciona o ID e o valor do input à descrição
    descricao += `${input.id}: ${input.value}; `;
  }
}
    const modelId = document.getElementById('Modelo').value;

    const data = {
      descricao: descricao,
      subscritorId: idUsuario,
      model: {
        modelId: modelId
      }
    };
   console.log(data)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8085/v1/documento/cadastrar');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 201) {
           alert("Formulário enviado com sucesso!");
      } else {
        // Lógica para lidar com outros códigos de status de resposta, se necessário
      }
    };
    xhr.send(JSON.stringify(data));
  });
