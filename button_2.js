let button2 = function(){
  let bts = document.querySelectorAll('.button-2')

  let length = bts.length
  for (let i =0;i<length;i++){
    bts[i].addEventListener('mousemove', function(e){
      let circle = this.getElementsByTagName('circle')[0]
      circle.style.cx = e.clientX - this.offsetLeft
      circle.style.cy = e.clientY - this.offsetTop
    })
    bts[i].addEventListener('click', function(){
      let circle = this.getElementsByTagName('circle')[0]
      circle.classList.add('button-2-animation')
      setTimeout(function(){
        circle.classList.remove('button-2-animation')
      }, 310)
    })
  }
}

button2()
