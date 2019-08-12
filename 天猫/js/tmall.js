
window.onload=function () {
    let martrighttoplef1=document.querySelectorAll(".martrighttoplef1")
    let martrightbottom=document.querySelectorAll(".martrightbottom")
    martrightbottom[0].style.zIndex=10

    martrighttoplef1.forEach((item,index)=>{
        item.onmouseenter = function () {
           martrightbottom.forEach(function (item,index) {
              item.style.zIndex=0
           })
            martrightbottom[index].style.zIndex=10
        }
    })
}