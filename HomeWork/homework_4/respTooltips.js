let tTips = document.getElementsByClassName('tooltip')

for (let item of tTips) {
    item.addEventListener('mouseenter', (e) => {
        let tText = e.target.querySelector('.tooltiptext')
        if (e.clientY < tText.offsetHeight) {
            tText.classList.add('tooltiptextBot')
        } else {
            tText.classList.add('tooltiptextTop')
        }
    })
}