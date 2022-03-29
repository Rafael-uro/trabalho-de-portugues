
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
  createCanvas(windowWidth, windowHeight)


  trex = createSprite(70, height - 90, 30, 50);
  trex.addAnimation("corre", trexcorrendo);
  trex.scale = 0.5;
  borda = createEdgeSprites()
  solo = createSprite(width / 2, height / 2, windowWidth, 20);
  solo.addImage(ground);
  solo.scale = 1.1
  trex.depth = solo.depth
  trex.depth = trex.depth + 1




  grupodeobstaculos = createGroup();
  fimdejogo = createSprite(width / 2, height / 2 - 50, 20, 10);
  fimdejogo.addImage(carregarfim);
  botaofimdejogo = createSprite(width / 2, height / 2, 10, 10);
  botaofimdejogo.addImage(botao);


  trex.setCollider("circle", 0, 0, 40)

  botaofimdejogo.scale = 0.4
  fimdejogo.scale = 0.5
  soloinvisivel = createSprite(width / 2, height - 75, width, 10)
  soloinvisivel.visible = false
  b = createSprite(200, 400, 50, 50)
  b.visible = false
  a = createSprite(200, 600, 50, 50)
  a.visible = false
  c = createSprite(200, 500, 50, 50)
  c.visible = false
  d = createSprite(200, 700, 50, 50)
  d.visible = false
  e = createSprite(300, 400, 50, 50)
  e.visible = false
  f = createSprite(300, 600, 50, 50)
  f.visible = false
  g = createSprite(300, 500, 50, 50)
  g.visible = false
  h = createSprite(300, 700, 50, 50)
  h.visible = false
  i = createSprite(400, 400, 50, 50)
  i.visible = false
  j = createSprite(400, 600, 50, 50)
  j.visible = false
  
  




}

function draw() {
  background("180");


  if (estadodejogo === JOGANDO) {

    pontuacao = pontuacao + Math.round(frameRate() / 63);
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
   

    if (solo.x < 650) {
      solo.x = solo.width / 2

    }
    fimdejogo.visible = false
    botaofimdejogo.visible = false
    solo.velocityX = -8

    if ((touches.length > 0 || keyDown("up")) && trex.y >= height - 120) {
      trex.velocityY = -15

    }
    trex.velocityY = trex.velocityY + 0.5
    cact();


    // trex.debug = true
    grupodeobstaculos.debug = true
    if (trex.isTouching(grupodeobstaculos)) {
      estadodejogo = GAMEOVER


    }

  }




  else if (estadodejogo === GAMEOVER) {

    grupodeobstaculos.setVelocityXEach(0)
    trex.velocityX = 0
    solo.velocityX = 0
    trex.velocityY = 0

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


    text("complete as frases: Marcela e Julia são ________ estudiosas/ Está fazendo zero _______/ Talvez ela não ______ tão má", width / 9, height / 4)
    textSize(30)
    pop()
    solo.visible = false
    trex.velocityY = trex.velocityY + 10
    grupodeobstaculos.destroyEach()
    trex.visible = false
    b.visible = true
    a.visible = true
    push()
    textSize(50)
    text("menos - grau - seja", 300, 400)
    text("menos - graus - seja", 300, 600)
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


    text("assinale a alternativa Incorreta", width / 9, height / 4)
    textSize(30)
  pop()
   solo.visible = false
   trex.velocityY = trex.velocityY + 10
    grupodeobstaculos.destroyEach()
   trex.visible = false
    c.visible = true
    d.visible = true
 push()
    textSize(50)
    text("são meia-noite", 300, 500)
    text("é quatro horas", 300, 700)
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


    text("assinale a alternativa correta", width / 9, height / 4)
    textSize(30)
  pop()
   solo.visible = false
   trex.velocityY = trex.velocityY + 10
    grupodeobstaculos.destroyEach()
   trex.visible = false
    e.visible = true
    f.visible = true
 push()
    textSize(40)
    text("mesmo se eles quizerem, eu vou recusar", 400, 400)
    text("eu fiz um quiz de perguntas e respostas na aula de hoje", 400, 600)
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


    text("sobre a utilização do pronome (mim) assinale a alternativa correta", width / 9, height / 4)
    textSize(30)
  pop()
   solo.visible = false
   trex.velocityY = trex.velocityY + 10
    grupodeobstaculos.destroyEach()
   trex.visible = false
    g.visible = true
    h.visible = true
 push()
    textSize(40)
    text("para mim estudar,preciso de silencio", 400, 500)
    text("ela pode levar a bolsa para mim ", 400, 700)
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


    text("assinale a alternativa correta", width / 9, height / 4)
    textSize(30)
  pop()
   solo.visible = false
   trex.velocityY = trex.velocityY + 10
    grupodeobstaculos.destroyEach()
   trex.visible = false
    i.visible = true
    j.visible = true
 push()
    textSize(30)
    text("os amigos se conheceram há cerca de vinte anos", 500, 400)
    text("os passageiros ficaram presos no transito a cerca de trinta minutos", 500, 600)
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
  


  text("pontos " + pontuacao, 500, 30);





  trex.collide(soloinvisivel)




  drawSprites();


}


function cact() {



  if (frameCount % 70 === 0) {
    obstaculo1 = createSprite(width, height - 100, 20, 20);
    obstaculo1.velocityX = (-6)
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



