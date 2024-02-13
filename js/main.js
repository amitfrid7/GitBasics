var gBall1Size = 100
var gBall2Size = 100

function onBall1Click(ball, maxDiameter) {
    gBall1Size = gBall1Size + getRandomInt(20, 60)
    
    if (gBall1Size >= maxDiameter) gBall1Size = 100
    ball.style.width = gBall1Size + 'px'
    ball.style.height = gBall1Size + 'px'
    ball.innerText = gBall1Size
    
    ball.style.backgroundColor = getRandomColor()
}

function onBall2Click(ball, maxDiameter) {
    gBall2Size = gBall2Size + getRandomInt(20, 60)
    
    if (gBall2Size >= maxDiameter) gBall2Size = 100
    ball.style.width = gBall2Size + 'px'
    ball.style.height = gBall2Size + 'px'
    
    ball.style.backgroundColor = getRandomColor()
    ball.innerText = gBall2Size
}

function onBall3Click() {

    var ball1 = document.querySelector('.ball1')
    var ball2 = document.querySelector('.ball2')

    var holder = {  
                width: ball1.style.width,
                height: ball1.style.height, 
                color: ball1.style.backgroundColor,
                size: ball1.innerText
            }

    ball1.style.width = ball2.style.width
    ball1.style.height = ball2.style.height
    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball1.innerText = ball2.innerText

    ball2.style.width = holder.width
    ball2.style.height = holder.height
    ball2.style.backgroundColor = holder.color
    ball2.innerText = holder.size
}

function onBall4Click() {

    var ball1 = document.querySelector('.ball1')
    var ball2 = document.querySelector('.ball2')

    var ball1Decrement = getRandomInt(20, 60)
    if (gBall1Size - ball1Decrement >= 100) gBall1Size = gBall1Size - ball1Decrement

    var ball2Decrement = getRandomInt(20, 60)
    if (gBall2Size - ball2Decrement >= 100) gBall2Size = gBall2Size - ball2Decrement

    ball1.style.width = gBall1Size + 'px'
    ball1.style.height = gBall1Size + 'px'
    ball1.innerText = gBall1Size

    ball2.style.width = gBall2Size + 'px'
    ball2.style.height = gBall2Size + 'px'
    ball2.innerText = gBall2Size
}

function onBall5Click() {
    var body = document.querySelector('body')
    body.style.backgroundColor = getRandomColor()
}