const title= document.getElementById('title');
const bg= document.getElementById('bg');
const centerTree= document.getElementById('centerTree');
const mountain= document.getElementById('mountain');
const grass= document.getElementById('grass');
const rightTree= document.getElementById('rightTree');
const leftTree= document.getElementById('leftTree');centerTree

window.addEventListener('scroll', ()=>{
    let value= window.scrollY;
    title.style.marginTop=value * 1.5 +'px'
    leftTree.style.marginLeft=value *-.3 +'px'
    rightTree.style.marginLeft=value * 0.3 +'px'
    mountain.style.paddingTop=value * -5 +'px'
   
  
    title.style.marginTop=value * 0.8 +'px'
})
