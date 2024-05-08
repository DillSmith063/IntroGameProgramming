class BallAimComponent extends Component {
    start(ctx) {
      this.angle = 0
      this.radius = 1
      this.speed = 15;
    }

    update(ctx) {
      if (Input.keysDown.includes("ArrowLeft"))
        this.angle -= Time.deltaTime * this.speed

      if (Input.keysDown.includes("ArrowRight"))
        this.angle += Time.deltaTime * this.speed
  
      if (Input.keysUpThisFrame.includes("Space")) {
        let shell = new BallPrefab()
        let lineComponent = this.parent.getComponent("Line")
      
        let x = lineComponent.two.x;
        let y = lineComponent.two.y;
  
        GameObject.instantiate(shell, x, y, .5, .5)
        shell.start(ctx)
        shell.getComponent("RigidBody").vx = Math.cos(this.angle) * 10
        shell.getComponent("RigidBody").vy = Math.sin(this.angle) * 10

        this.lastBall = shell
      }

      if(this.lastBall){
        let rigidBody = this.lastBall.getComponent("RigidBody")
        if(rigidBody){
            let distance = Math.sqrt(Math.pow(rigidBody.vx, 2) + Math.pow(rigidBody.vy, 2)) * Time.deltaTime
            this.distanceTraveled += distance
        }
      }

      let lineComponent = this.parent.getComponent("Line")
      let x = lineComponent.one.x + Math.cos(this.angle) * this.radius;
      let y = lineComponent.one.y + Math.sin(this.angle) * this.radius;
      lineComponent.two.x = x;
      lineComponent.two.y = y;

      let WIN_DISTANCE = 10
      if (this.distanceTraveled >= WIN_DISTANCE) {
        Engine.currentScene = new WinScene();
      }
    }
  }
  
  window.BallAimComponent = BallAimComponent;