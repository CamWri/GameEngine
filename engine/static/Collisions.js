class Collisions{
    static isCircleCircleCollision(centerOne, centerTwo, radiusOne, radiusTwo){
        let distance = Math.sqrt((centerOne.x-centerTwo.x) **2 + (centerOne.y - centerTwo.y) ** 2)
        if(radiusOne + radiusTwo > distance){
            return true
        }
        return false
    }

    static isPointRectangleCollision(point, rectangleCenter, width, height){
        if(point.x > rectangleCenter.x - width / 2 && point.x < rectangleCenter.x + width / 2 && point.y > rectangleCenter.y - width / 2 && point.y < rectangleCenter.y + width / 2){
            return true
        }
        return false
    }

    static isPointCircleCollision(point, circleCenter, circleRadius){
        let distance = Math.sqrt((point.x-circleCenter.x) **2 + (point.y - circleCenter.y) ** 2)
        return distance < circleRadius
    }

    static isRectangleRectangleCollision(rectangleOneCenter,rectangleOneWidth, rectangleOneHeight, rectangleTwoCenter, rectangleTwoWidth, rectangleTwoHeight){
        if(
            rectangleOneCenter.x - rectangleOneWidth/2 > rectangleTwoCenter.x + rectangleTwoWidth / 2 ||
            rectangleOneCenter.x + rectangleOneWidth/2 < rectangleTwoCenter.x - rectangleTwoWidth / 2 ||
            rectangleOneCenter.y - rectangleOneHeight/2 > rectangleTwoCenter.y + rectangleTwoHeight / 2 ||
            rectangleOneCenter.y + rectangleOneHeight/2 < rectangleTwoCenter.y - rectangleTwoHeight / 2
        ){
            return false
        }
        return true
    }

    //Personal Collisions
    //Ask how to do this collision/how to format it
    static isCircleInsideRectangleCollisionRight(rectXLeft, currentX){
        if(currentX > rectXLeft){
            return true
        }
        return false
    }

    static isCircleInsideRectangleCollisionLeft(rectXRight, currentX){
        if (currentX < rectXRight){
            return true
        }
        return false
    }

    static isCircleInsideRectangleCollisionBottom(rectYBottom, currentY){
        if (currentY > rectYBottom){
            return true
        }
        return false
    }

    static isCircleInsideRectangleCollisionTop(rectYTop, currentY){
        if (currentY < rectYTop){
            return true
        }
        return false
    }
}

window.Collisions = Collisions
export default Collisions