class Launcher {
    constructor (bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length: 10,
            stiffness: 0.07
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        
    }

    }
    