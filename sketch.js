//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis RaqueteOponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente

let colidiu = false;

//variaveis placar
let meusPontos = 0
let pontosOponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  // verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(yRaquete, xRaquete);
  movimentoRaqueteOponente()
  colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente)
  IncluiPlacar();
  marcaPonto();
}


function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}


function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
} 

function movimentoRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
  yRaqueteOponente += velocidadeYOponente
}

function IncluiPlacar()
{
  textAlign(CENTER)
  fill(255)
  text(meusPontos, 278, 26)
  text(pontosOponente, 321, 26)
}

function marcaPonto()
{
  if (xBolinha > 590){
    meusPontos += 1
  }
  if (xBolinha < 10){
    pontosOponente += 1
  }
}