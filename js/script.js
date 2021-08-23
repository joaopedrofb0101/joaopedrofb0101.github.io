/* guia plugin Slide
  new SimpleSlide({
    slide: 'principal', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });

  *guia plugin anime
  new SimpleAnime({

    após isso, adicione data-anime ao elemento que quer animar,
    não esqueça de informar em milissegundos o tempo de animação.
    ex:
      <p data-anime="1000">Descrição da Página</p>

    se quiser criar animações diferentes, adicione classes aos 
    elementos que deseja diferenciar, não esqueça de definir o
    trasnform inicial da animação na classe
    ex:
      <p> data-anime="1000" class="fadeInDown">Descrição da Página</p>
  })

  *guia simple form
*/

if(window.SimpleSlide) {
  new SimpleSlide({
    slide:"quote", // nome do arquivo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide:"portfolio",
    time: 3000,
    nav:true,
  })
}

if(window.SimpleAnime) {
  new SimpleAnime();
}


if(window.SimpleForm) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio :(<p>Envie um email para: contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Mensagem enviada!</h2><p>Em breve te respondemos.</p></div>", // mensagem de sucesso
})
}