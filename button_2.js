let button2 = function(){
  let bts = document.querySelectorAll('.button-2')

  let length = bts.length
  for (let i =0;i<length;i++){
    bts[i].addEventListener('click', function(e){
      let circle = this.getElementsByTagName('circle')[0]
      let rect = e.target.getBoundingClientRect()
      circle.style.cx = e.clientX - rect.left
      circle.style.cy = e.clientY - rect.top
      circle.classList.add('button-2-animation')
      setTimeout(function(){
        circle.classList.remove('button-2-animation')
      }, 310)
    })
  }
}

button2()
