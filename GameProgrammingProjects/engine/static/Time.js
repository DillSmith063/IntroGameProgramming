class Time {
    static ms = 100
    static fps = 1000 / Time.ms
    static deltaTime = Time.ms / 1000
    static timePassed = 0
    static update(ctx){
        Time.time += Time.deltaTime
    }
}

window.Time = Time