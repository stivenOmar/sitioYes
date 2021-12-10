let btnNo = document.getElementById('no');

btnNo.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    let bottom= Math.random()*200;
    let left = Math.random()*200;
    btnNo.style.cssText = `bottom: ${bottom}px; left: ${left}px;`;
})