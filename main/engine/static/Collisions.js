class Collisions {
    static isCircleCirleCollision(cOne, cTwo, rOne, rtwo){
        let distnace = Math.sqrt((cOne.x - cTwo.x)**2 + (cOne.y - cTwo.y)**2)
        if(distance < r1 + r2) {
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