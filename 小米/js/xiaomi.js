
window.onload=function () {
    let new1=document.querySelectorAll(".new1");
    console.log(new1);
    let jiadianright0=document.querySelectorAll(".jiadianright0")
    jiadianright0[0].style.zIndex=10

    new1.forEach((item,index)=>{

        item.onmouseenter = function () {
           new1.forEach(function (item,index) {
                new1[index].style.color="#333"
              new1[index].style.borderBottom="none";
            })
            new1[index].style.color="#ff6700";
           new1[index].style.borderBottom="3px solid #ff6700";
           jiadianright0.forEach(function (item,index) {
                jiadianright0[index].style.zIndex=0
            })
            jiadianright0[index].style.zIndex=10
        }
    })
}




  function lunbotu() {
      let img = document.querySelectorAll(".lunboright a")
      let now = 0
      let box = document.querySelector(".lunboright")
      let lbjtr = document.querySelector(".lbjtr")
      let lbjtl = document.querySelector(".lbjtl")
      let lbyuan1 = document.querySelectorAll(".lbyuan1")
       lbyuan1[0].style.backgroundColor="#fff"
      lbyuan1[0].style.borderColor="rgba(0,0,0,0.4)"
      function run(type = 0) {
          if (type==0) {
              now += 1
              if (now > img.length - 1) {
                  now = 0
              }
          } else {
              now -= 1
              if (now < 0) {
                  now = img.length - 1
              }
          }

          img.forEach(function (item, index) {
              item.classList.remove("active")
          })
           lbyuan1.forEach(function (ti,inde) {

                  ti.style.background="rgba(0,0,0,0.4)"
                  ti.style.borderColor="rgba(255,255,255,0.3)"
              })
              lbyuan1[now].style.backgroundColor="#fff"
             lbyuan1[now].style.borderColor="rgba(0,0,0,0.4)"
          img[now].classList.add("active")
      }


      lbyuan1.forEach(function (it, indx) {
          it.onclick = function () {
              img.forEach(function (it, i) {
                  it.classList.remove("active")
              })
              lbyuan1.forEach(function (ti,inde) {
                  ti.style.background="rgba(0,0,0,0.4)"
                  ti.style.borderColor="rgba(255,255,255,0.3)"
              })
              lbyuan1[indx].style.backgroundColor="#fff"
              lbyuan1[indx].style.borderColor="rgba(0,0,0,0.4)"
              img[indx].classList.add("active")
              now = indx
          }
      })

      let t = setInterval(run, 3000)
      box.onmouseenter = function () {
          clearInterval(t)
      }
      box.onmouseleave = function () {
          t = setInterval(run, 3000)
      }
      lbjtr.onclick = function () {
          run(0)
      }
      lbjtl.onclick = function () {
          run(1)
      }


  }