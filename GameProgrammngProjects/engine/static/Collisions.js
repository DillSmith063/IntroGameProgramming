class Collisions {
    static isCircleCirleCollision(cOne, cTwo, rOne, rTwo){
        let distance = Math.sqrt((cOne.x - cTwo.x)**2 + (cOne.y - cTwo.y)**2)
        if(rOne + rTwo > distance) {
            return true
        } else {
            return false
        }
    }

    /*static isCircleRectangleCollision(){

    }

    static isRectangleRectangleCollision(){

    }*/
}

window.Collisions = Collisions
export default Collisions