let fBall = document.getElementById('fBall')

document.addEventListener('click', function (e) {
    let coords = {
        x: e.clientX - fBall.clientWidth / 2,
        y: e.clientY - fBall.clientHeight / 2
    }
    const { x, y } = coords
    fBall.style.left = `${x}px`
    fBall.style.top = `${y}px`
})
