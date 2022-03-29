
var grupodenuvens;
var grupodeobstaculos;
var JOGANDO = 1;
var GAMEOVER = 0;
var PERGUNTA0 = 2
var PERGUNTA1 = 3
var PERGUNTA2 = 4
var PERGUNTA3 = 5
var PERGUNTA4 = 6
var PERGUNTA5 = 7
var PERGUNTA6 = 8
var PERGUNTA7 = 9
var PERGUNTA8 = 0
var PERGUNTA9 = 11
var estadodejogo = JOGANDO;

var trex, trexcorrendo
var borda;
var solo, ground, soloinvisivel;
var nuvem, clouns;
var obstaculo1, cacto
var pontuacao = 0;
var fimdejogo, carregarfim;
var botaofimdejogo, botao;
var b, a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t



function preload() {
  trexcorrendo = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  ground = loadImage("ground2.jpg");

  cacto = loadImage("obstacle1.png");

  carregarfim = loadImage("gameOver.png");
  botao = loadImage("restart.png");


}

function setup() {
  createCanvas(windowHeight, windowWidth)


  trex = createSprite(height - 90, 70, 30, 50);
  trex.addAnimation("corre", trexcorrendo);
  trex.scale = 0.5;
  borda = createEdgeSprites()
  solo = createSprite(height / 1.5, width / 2, 20, windowWidth,);
  solo.addImage(ground);
  solo.scale = 1.1
  trex.depth = solo.depth
  trex.depth = trex.depth + 1




  grupodeobstaculos = createGroup();
  fimdejogo = createSprite(height / 2 - 50, width / 2, 20, 10);
  fimdejogo.addImage(carregarfim);
  botaofimdejogo = createSprite(height / 2, width / 2, 10, 10);
  botaofimdejogo.addImage(botao);


  trex.setCollider("circle", 0, 0, 40)

  botaofimdejogo.scale = 0.4
  fimdejogo.scale = 0.5
  soloinvisivel = createSprite(height - 75, width / 2, 10, width)
  soloinvisivel.visible = false
  b = createSprite(400, 200, 50, 50)
  b.visible = false
  a = createSprite(600, 200, 50, 50)
  a.visible = false
  c = createSprite(500, 200, 50, 50)
  c.visible = false
  d = createSprite(700, 200, 50, 50)
  d.visible = false
  e = createSprite(400, 300, 50, 50)
  e.visible = false
  f = createSprite(600, 300, 50, 50)
  f.visible = false
  g = createSprite(500, 300, 50, 50)
  g.visible = false
  h = createSprite(700, 300, 50, 50)
  h.visible = false
  i = createSprite(400, 400, 50, 50)
  i.visible = false
  j = createSprite(600, 400, 50, 50)
  j.visible = false






}

function draw() {
  background("180");


  if (estadodejogo === JOGANDO) {

    pontuacao = pontuacao + Math.round(frameRate() / 60);
    if (pontuacao > 0 && pontuacao % 100 === 0) {

    }
    solo.visible = true
    trex.visible = true

    if (pontuacao === 100) {
      estadodejogo = PERGUNTA0
    }
    if (pontuacao === 200) {
      estadodejogo = PERGUNTA1
    }
    if (pontuacao === 300) {
      estadodejogo = PERGUNTA2
    }
    if (pontuacao === 400) {
      estadodejogo = PERGUNTA3
    }
    if (pontuacao === 500) {
      estadodejogo = PERGUNTA4
    }


    if (solo.y < 650) {
      solo.x = solo.width / 2

    }
    fimdejogo.visible = false
    botaofimdejogo.visible = false
    solo.velocityY = -8

    if ((touches.length > 0 || keyDown("up")) && trex.x >= width - 120) {
      trex.velocityX = -15

    }
    trex.velocityX = trex.velocityX + 0.5
    cact();


    // trex.debug = true
    grupodeobstaculos.debug = true
    if (trex.isTouching(grupodeobstaculos)) {
      estadodejogo = GAMEOVER


    }

  }




  else if (estadodejogo === GAMEOVER) {

    grupodeobstaculos.setVelocityXEach(0)
    trex.velocityY = 0
    solo.velocityY = 0
    trex.velocityX = 0

    grupodeobstaculos.setLifetimeEach(-1)



    fimdejogo.visible = true
    botaofimdejogo.visible = true
    solo.visible = true
    trex.visible = true




    if (touches.length > 0 || mousePressedOver(botaofimdejogo)) {
      reiniciar();
      touches = []
    }
  }
  if (estadodejogo === PERGUNTA0) {
    push()
    textSize(20)


    text("complete as frases: Marcela e Julia são ________ estudiosas/ Está fazendo zero _______/ Talvez ela não ______ tão má", height / 4, width / 9)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityX = trex.velocityX + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    b.visible = true
    a.visible = true
    push()
    textSize(50)
    text("menos - grau - seja", 400, 300)
    text("menos - graus - seja", 600, 300)
    pop()
    if (touches.length > 0 || mousePressedOver(b)) {
      estadodejogo = GAMEOVER
      touches = []

    }
    if (touches.length > 0 || mousePressedOver(a)) {
      estadodejogo = JOGANDO
      touches = []
      b.destroy()
      a.destroy()
    }


  }
  if (estadodejogo === PERGUNTA1) {
    push()
    textSize(20)


    text("assinale a alternativa Incorreta", height / 4, width / 9)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityX = trex.velocityX + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    c.visible = true
    d.visible = true
    push()
    textSize(50)
    text("são meia-noite", 500, 300)
    text("é quatro horas", 700, 300)
    pop()
    if (touches.length > 0 || mousePressedOver(c)) {
      estadodejogo = GAMEOVER
      touches = []

    }
    if (touches.length > 0 || mousePressedOver(d)) {
      estadodejogo = JOGANDO
      touches = []
      c.destroy()
      d.destroy()
    }


  }
  if (estadodejogo === PERGUNTA2) {
    push()
    textSize(20)


    text("assinale a alternativa correta", height / 4, width / 9)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityX = trex.velocityX + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    e.visible = true
    f.visible = true
    push()
    textSize(40)
    text("mesmo se eles quizerem, eu vou recusar", 400, 400)
    text("eu fiz um quiz de perguntas e respostas na aula de hoje", 600, 400)
    pop()
    if (touches.length > 0 || mousePressedOver(f)) {
      estadodejogo = GAMEOVER
      touches = []

    }
    if (touches.length > 0 || mousePressedOver(e)) {
      estadodejogo = JOGANDO
      touches = []
      e.destroy()
      f.destroy()
    }

  }
  if (estadodejogo === PERGUNTA3) {
    push()
    textSize(20)


    text("sobre a utilização do pronome (mim) assinale a alternativa correta", height / 4, width / 9)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityX = trex.velocityX + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    g.visible = true
    h.visible = true
    push()
    textSize(40)
    text("para mim estudar,preciso de silencio", 500, 400)
    text("ela pode levar a bolsa para mim ", 700, 400)
    pop()
    if (touches.length > 0 || mousePressedOver(g)) {
      estadodejogo = GAMEOVER
      touches = []

    }
    if (touches.length > 0 || mousePressedOver(h)) {
      estadodejogo = JOGANDO
      touches = []
      h.destroy()
      g.destroy()
    }

  }
  if (estadodejogo === PERGUNTA4) {
    push()
    textSize(20)


    text("assinale a alternativa correta", height / 4, width / 9)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityX = trex.velocityX + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    i.visible = true
    j.visible = true
    push()
    textSize(30)
    text("os amigos se conheceram há cerca de vinte anos", 400, 500)
    text("os passageiros ficaram presos no transito a cerca de trinta minutos", 600, 500)
    pop()
    if (touches.length > 0 || mousePressedOver(j)) {
      estadodejogo = GAMEOVER
      touches = []

    }
    if (touches.length > 0 || mousePressedOver(i)) {
      estadodejogo = JOGANDO
      touches = []
      i.destroy()
      j.destroy()
    }
  }



  text("pontos " + pontuacao, 30, 500);





  trex.collide(soloinvisivel)




  drawSprites();


}


function cact() {



  if (frameCount % 70 === 0) {
    obstaculo1 = createSprite( height - 100,width, 20, 20);
    obstaculo1.velocityY = (-6)
    //obstacilo1.velocityX = -(6 + pontuacao / 100)
    var aleatorio = Math.round(random(1, 1));
    obstaculo1.addImage(cacto)
    obstaculo1.scale = 0.3;
    obstaculo1.lifetime = 300
    grupodeobstaculos.add(obstaculo1);






  }

  grupodeobstaculos.debug = true




}








function reiniciar() {

  estadodejogo = JOGANDO
  grupodeobstaculos.destroyEach();
  trex.changeAnimation("running", trexcorrendo);
  pontuacao = 0
  a.visible = false
  b.visible = false
  c.visible = false
  d.visible = false
  e.visible = false
  f.visible = false
  g.visible = false
  h.visible = false
  i.visible = false
  j.visible = false
}



