class rope{
	constructor(body1,body2, /*body3,body4,body5,*/ offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			/*bodyC:body3,
			bodyD:body4,
			bodyE:body5,*/
			pointB:{x:this.offsetX, y:this.offsetY},
			pointD:{x:this.offsetX, y:this.offsetY},
			/*pointC:{x:this.offsetX, y:this.offsetY}*/
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
	
		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY


		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}