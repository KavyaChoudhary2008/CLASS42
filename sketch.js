function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var num = 4;
  var message = "welcome"
  var num1 = "5";
  num1 = parseInt(num1);
  num1 = num1 + 1;
  console.log(num1)
  var vool = true 
  var object 
  console.log(object) 
  var obj = null;
  console.log(obj)
  //number,string,boolean,null,undefined
console.log(message.length);
console.log(message.toUpperCase());
  //plus,minus,multiplication,division,modulo
  var name = "My namehi";

  switch(name) {  
  case  "My name":  
  console.log("Condition 1");  
  break;  
  case  "my Name":  
  console.log("Condition 2");  
  break;  
  default:  
  console.log("None of the conditions are true");
  }
  console.log(13 % 5)

  for(var i=0; i<=5; i=i+2){
    console.log(i)
  }

  var friends = ["friend1","friend2","friend3"]
  console.log(friends[0])
  friends.push("xyz")
friends.pop();
  console.log(friends)
  console.log(friends.length)
//intialinsation,condition,incriment

  //comparison operator >,<,===

//assignment =

  var x = 5;
  
  if(x===5){
console.log("5");
  }
  circumference(9)
  var paddle = new Object();
  paddle.length = 60
paddle.showLength = function(){
	console.log(paddle.length);
}
paddle.showLength()
}


function draw() {
  background(255,255,255);  
  drawSprites();
}

function circumference(radius){
	var circumference = 2 * 3.14 * radius
  console.log(circumference);
	return circumference
}