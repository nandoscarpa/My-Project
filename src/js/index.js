// Passo - 1 
const personagens = document.querySelectorAll('.personagem');


// Passo 2 - Adicionar a classe selecionado no personagem que o usuário
//            passar o cursor do mouse.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
       
        //Passo 3 - Verificar se ja existe um personagem seleciona, se sim
        //           devemos remover a seleção.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        
        /* 
        OBJETIVO 2 - Quando passar o mouse sobre o personagem na listagem,
        Trocar a imagem, o nome e a descrição do personagem grande.
            #Passo 1 - Pegar o elementor do personagem grande pra add as informações nele.
            Passo 2 - alterar a img do personagem grande
            Passo 3 - alterar o nome do personagem grande
            passo 4 - alterar a descrição do personagem grande.       
        */ 
         const personagemGrande = document.querySelector('.personagem-selecionado');
        






    })
})

