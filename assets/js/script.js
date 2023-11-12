let txtrgb = document.getElementById('text')
txtrgb.innerText = 'background: #FFF'

function _rand() {
    let x = Math.floor(Math.random() * 256);
    return x
}
function para() {
    let r = _rand()
    let g = _rand()
    let b = _rand()
    document.querySelector('body').style.background = `rgb( ${r}, ${g}, ${b})`
    txtrgb.innerHTML = "Background: #" + r + g + b
}