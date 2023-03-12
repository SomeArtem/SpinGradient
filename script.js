var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;    
var parts=[];

var a=0;
var particlesAmount=50;//количество частиц!!!!!!
var speed=5;//разброс скорости вращения
var randomA=[];

class part{
    constructor(x,y,size,angle){
        this.x=x;
        this.y=y;
        this.size=size;
        this.angle=angle           
    }
    drawOne(angle){
        var dx=this.x+this.size/2;
        var dy=this.y+this.size/2;
        if (angle){
            angle=angle*(Math.PI/180);
            ctx.save();
            ctx.translate(dx, dy);
            ctx.rotate(angle);
            ctx.translate(-dx, -dy);
        }        
        ctx.strokeStyle=' #ffffff70';
        ctx.strokeRect(this.x,this.y,this.size,this.size);
        if(angle){
            ctx.restore();
        }
    }
};
    
    
    function randomizer(){
        var ran=1+Math.floor(Math.random() * speed);
        return ran;
    }
    function negRandomizer(){
        var ran=-(speed+1)+Math.floor(Math.random() * speed);
        return ran;
    }
    for(let i=0;i<particlesAmount/2;i++){
        randomA.push(randomizer());
    }
    for(let i=0;i<particlesAmount/2;i++){
        randomA.push(negRandomizer());
    }
    console.log(randomA)

    for(let i=0;i<particlesAmount;i++){
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height;
        let size=10+Math.random()*40;        
        parts.push(new part(x,y,size,a));
    }


   function animate(){
        
        var gradient = ctx.createLinearGradient(0, 0,canvas.width, canvas.height);
        gradient.addColorStop(0, '#ee7752'); 
        gradient.addColorStop(0.7, '#ee73c7');
        gradient.addColorStop(1, '#23a6d5');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i=0; i<parts.length; i++){
            parts[i].drawOne(a/randomA[i]);                 
        }
        
        a++;
        requestAnimationFrame(animate);
    }
    animate();