
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var bloco1_opitions = {
		restitution: 0.5,
		frictionAir: 0  

	}
	//Crie os Corpos Aqui.
	var bloco2_opitions = {
		restitution: 0.7,
		frictionAir: 0.3 

	}
	//Crie os Corpos Aqui.
	var bloco3_opitions = {
		restitution: 0.01,
		frictionAir: 0.1  

	}
	var ground_opitions = {
		isStatic: true 
	}
	ground = Bodies.rectangle(600,580,1200,2,ground_opitions)
	World.add(world,ground)


	//Crie os Corpos Aqui.
	bloco1 = Bodies.circle(220,10,10,bloco1_opitions)
	bloco2 = Bodies.circle(110,50,10,bloco2_opitions)
	bloco3 = Bodies.rectangle(350,50,10,10,bloco3_opitions)
	World.add(world,bloco1)
	World.add(world,bloco2)
	World.add(world,bloco3)
	

	//estilizando os corpos aqui
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //criada forma para o plano e suporte
  rect(ground.position.x,ground.position.y,1200);
  

  //criadas formas para todas as partículas
  ellipse(bloco1.position.x,bloco1.position.y,30);
  rect(bloco2.position.x,bloco2.position.y,50,50)
  rect(bloco3.position.x,bloco3.position.y,100,50)

  
}



