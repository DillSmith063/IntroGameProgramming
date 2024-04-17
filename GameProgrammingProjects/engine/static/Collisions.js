class Collisions {
    static isCircleCirleCollision(centerOne, centerTwo, radOne, radTwo){
        let distance = Math.sqrt((centerOne.x - centerTwo.x)**2 + (centerOne.y - centerTwo.y)**2)
        if(radOne + radTwo > distance) {
            return true
        } else {
            return false
        }
    }

    static isRectangleRectangleCollision(rectOneCenter, rectOneWidth, rectOneHeight, rectTwoCenter, rectTwoWidth, rectTwoHeight){
        if(
            rectOneCenter.x - rectOneWidth / 2 > rectTwoCenter.x + rectTwoWidth / 2 ||
            rectOneCenter.x + rectOneWidth / 2 > rectTwoCenter.x - rectTwoWidth / 2 ||
            rectOneCenter.y - rectOneHeight / 2 > rectTwoCenter.y + rectTwoHeight / 2 ||
            rectOneCenter.y + rectOneHeight / 2 > rectTwoCenter.y - rectTwoHeight / 2 
        ){
            return false
        } else {
            return true
        }
    }

    static isPointRectangleCollision(point, rectangleCenter, width, height) {
        if (
            point.x > rectangleCenter.x - width / 2 &&
            point.x < rectangleCenter.x + width / 2 &&
            point.y > rectangleCenter.y - height / 2 &&
            point.y < rectangleCenter.y + height / 2
        )
            return true;
        return false;
    }
}

window.Collisions = Collisions
export default Collisions