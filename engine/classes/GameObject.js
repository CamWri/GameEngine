class GameObject{
    components = []

    constructor(name = "", tag = ""){
      this.components.push(new Transform())
      this.name = name
      this.tag = tag
      this.markForDestroy = false
    }

    addComponent(component){
      this.components.push(component);
      component.parent = this;
    }

    get transform(){
      return this.components[0]
    }

    start(ctx){
      for(let component of this.components){
        if(component.start){
          component.start(ctx);
        }
      }
    }

    draw(ctx){
      for(let component of this.components){
        if(component.draw){
          component.draw(ctx);
        }
      }
    }

    update(ctx){
      for(let component of this.components){
        if(component.update){
          component.update(ctx);
        }
      }
    }

    static find_name(gameObjectName){
      return Engine.currentScene.gameObjects.find(go => go.name == gameObjectName)
    }

    static find_tag(gameObjectName){
      return Engine.currentScene.gameObjects.find(go => go.tag == gameObjectName)
    }

    static filter_tag(gameObjectName){
      return Engine.currentScene.gameObjects.filter(go => go.tag == gameObjectName)
    }

    static instantiate(gameObject, x = 0, y = 0, scaleX = 1, scaleY = 1){
      Engine.currentScene.gameObjects.push(gameObject)
      gameObject.transform.x = x
      gameObject.transform.y = y
      //gameObject.transofrm.scaleX = scaleX
      //gameObject.transofrm.scaleY = scaleY
    }

    static destroy(gameObject){
      gameObject.markForDestroy = true
    }

}

window.GameObject = GameObject
export default GameObject