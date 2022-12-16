// nav bar
let elementsOfNav = [...document.querySelectorAll("aside ul li")];
elementsOfNav.forEach((li) => {
    li.onclick = (e) => {
        document.querySelector(".bg-f6").classList.remove('bg-f6');
        li.classList.add("bg-f6");
    }
})
// end nav bar
// strat team
let allUlAtTable = document.querySelectorAll('table tr ul')
allUlAtTable.forEach((ul) => {
    console.group();
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].children[0].setAttribute("src",`images/team-0${i+1}.png`)
    }
    console.groupEnd();
})
// end team
// strat status
const our_map = new Map();
our_map.set('pending','orange').set('in progress','bleu').set('completed','green').set('rejected','red')
document.querySelectorAll('table span').forEach(span => {
    span.setAttribute("style",`background-color:var(--${our_map.get(span.textContent)}-color)`)
})
// end status
