let rodada = 1;
let matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

    $('#iniciar').click(function(){

    if($('#jogador1').val()==''){
        alert('O apelido do player 1 não foi preenchido')
        return false
    }   

    if($('#jogador2').val()==''){
        alert('O apelido do player 2 não foi preenchido')
        return false
    } 


    //exibir os apelidos
    $('#nome_jogador1').html($('#jogador1').val());
    $('#nome_jogador2').html($('#jogador2').val());

    // Visualição conteudo
    $('#pagina_inicial').hide();
    $('#palco_jogo').show();

    });

    //jogo
    $('.jogada').click(function(){

        let id_campo = this.id;
        $('#'+id_campo).off(); // impedir que um campo seja clicado mais de uma vez
        jogada(id_campo);

    });

    function jogada(id){
        let icone = '';
        let ponto = 0 ;

        if((rodada % 2) == 1){
            icone = 'url("img/marcacao_1.png")'; // inserir imagem ao clicar
            ponto = -1;
        
        }       
        else{
            icone = 'url("img/marcacao_2.png")'; // inserir imagem ao clicar
            ponto = 1;
        }

        rodada++;

        $('#'+id).css('background', icone);

        let linha_coluna = id.split(''); // separar o id coluna do id linha

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        verifica_combinacao();

        }

    function verifica_combinacao(){

        //verifica na horizontal
        let pontos = 0;
        for(let i = 1; i <=3 ; i++){
        pontos = pontos + matriz_jogo['a'][i];
        }

        ganhador(pontos);

        //

        pontos = 0;
        for(let i = 1; i <=3 ; i++){
        pontos = pontos + matriz_jogo['b'][i];
        }
    
        ganhador(pontos);

        //

        pontos = 0;
        for(let i = 1; i <=3 ; i++){
        pontos = pontos + matriz_jogo['c'][i];
        }
        
        ganhador(pontos);

        //verifica na vertical
        
        for (let x = 1; x <= 3; x++){
            pontos = 0;
            pontos += matriz_jogo['a'][x];
            pontos += matriz_jogo['b'][x];
            pontos += matriz_jogo['c'][x];

            ganhador(pontos);
        }

        //verificar diagonal
        pontos = 0;

        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];

        ganhador(pontos)

        //
        pontos = 0;

        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];

        ganhador(pontos)


    }

    function ganhador(pontos){
        if (pontos == -3){
            var jogada1 = $('#jogador1').val();
            alert(jogada1 + " Venceu");
            $('.jogada').off()
        }

        else if (pontos == 3){
            var jogada2 = $('#jogador2').val();
            alert(jogada2 + " Venceu");
            $('.jogada').off()
        }
    }
    


});