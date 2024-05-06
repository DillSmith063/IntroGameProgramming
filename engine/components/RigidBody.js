class RigidBody extends Component{
    constructor(){
        super();
        this.vx = 0;
        this.vy = 0;
        this.gravity = 9.8
    }
    update(ctx){
        this.transform.x += this.vx * Time.deltaTime;
        this.transform.y += this.vy * Time.deltaTime;


        this.vy += this.gravity * Time.deltaTime
    }
}

window.RigidBody = RigidBody