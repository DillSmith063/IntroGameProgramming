class DeathSceneGameObject extends GameObject{
    update(){
        this.timeSinceDeath += Time.ms
        if(this.timeSinceDeath > 2000 && !this.showContinueMessage) {
            this.showContinueMessage = true
        }

        if(keysDownThisFrame.includes("Enter")) {
            currentScene = new MainScene()
        }
    }
}
