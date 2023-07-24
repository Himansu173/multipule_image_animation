pre = 0;
now = 1;
nex = 2;

function next() {
    if (now < 8) {
        document.querySelector(`.innerBox :nth-child(${now})`).style.cssText = `
        margin-left: -51vw;
        width: 9rem;
        height: 13rem;
        border-radius: 15px;
        z-index: -2;
        visibility: hidden;
        scale:1;
        transition:0.7s`
        document.querySelector(`.innerBox :nth-child(${nex})`).style.cssText = `
        width: 22.5rem;
        margin-left: -25vw;
        border-radius: 0;
        position: absolute;
        z-index: -1;
        scale: 2;
        transition:0.8s`

        pre++;
        now++;
        nex++;
        val = 1;
        for (let i = nex; i <= 8; i++) {
            document.querySelector(`.innerBox :nth-child(${i})`).style.cssText = `margin-left:${val}rem; transition:0.8s;`
            val += 10;
        }
    }
}
function previous() {
    if (pre > 0) {
        document.querySelector(`.innerBox :nth-child(${pre})`).style.cssText = `
        scale: 2;
        width: 22.5rem;
        margin-left: -25vw;
        border-radius: 0;
        position: absolute;
        z-index: -1;
        transition:0.8s`

        pre--;
        now--;
        nex--;
        val = 1;
        for (let i = nex; i <= 8; i++) {
            document.querySelector(`.innerBox :nth-child(${i})`).style.cssText = `margin-left:${val}rem; transition:0.8s;`
            val += 10;
        }
    }
}