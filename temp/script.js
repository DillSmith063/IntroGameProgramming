        let x = 0
        let y = 0
        let score = 0
        let keysDown = []
        let isDead = false
        let currentShape = 'circle'

        function gameLoop() {
            update()
            drawShape()
        }

        function update() {
            //a++
            let speed = 100

            if (keysDown.includes("ArrowLeft")) {
                x -= speed / fps
            }

            if (keysDown.includes("ArrowRight")) {
                x += speed / fps
            }

            if (keysDown.includes("ArrowUp")) {
                y -= speed / fps
            }

            if (keysDown.includes("ArrowDown")) {
                y += speed / fps
            }

            if(keysDown.includes("Space")){
                currentShape = currentShape === 'circle' ? 'rectangle' : 'circle'
            }

            score++

            if (x < 0) {
                isDead = true
            }
        }

        function drawShape() {
            let canvas = document.querySelector('#canv')
            let ctx = canvas.getContext("2d")


            if (!isDead) {
                ctx.fillStyle = "lightgray"
                ctx.beginPath()
                ctx.rect(0, 0, canvas.width, canvas.height)
                ctx.fill()


                //Draw the circle with a green interior
                //and purple outline
                if(currentShape === 'circle'){
                    ctx.beginPath();
                    ctx.fillStyle = "green"
                    ctx.strokeStyle = "purple"
                    ctx.lineWidth = 5
                    ctx.arc(50 + x, 50 +y, 50, 50, 0, Math.PI * 2)
                    ctx.fill()
                    ctx.stroke()
                } else if(currentShape === 'rectangle') {
                    ctx.beginPath();
                    ctx.fillStyle = "red"
                    ctx.strokeStyle = "yellow"
                    ctx.lineWidth = 5
                    ctx.fillRect(50 + x - 50, 50 + y - 50, 100, 100)
                    ctx.strokeRect(50 + x - 50, 50 + y - 50, 100, 100)
                }
            } else {
                ctx.fill = "black"
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                ctx.fillStyle = "red"
                ctx.font = "30px Comic Sans MS"
                ctx.fillText("you Died", 30, 30)
            }

        }

        function getRandomColor() {
            const letters = "012345689ABCDEF"
            let color = "#"
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            return color
        }

        function keyup(e) {
            console.log(e)
            let index = keysDown.indexOf(e.code)
            keysDown.splice(index, 1)
        }

        function keydown(e) {
            console.log(e)
            if (!keysDown.includes(e.code)) {
                keysDown.push(e.code)
            }
        }

        function setup() {
            document.addEventListener("keydown", keydown)
            document.addEventListener("keyup", keyup)

            let canvas = document.querySelector('#canv')
            let ctx = canvas.getContext("2d")

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        setup()

        let ms = 20
        let fps = 1000 / ms

        setInterval(gameLoop, ms)