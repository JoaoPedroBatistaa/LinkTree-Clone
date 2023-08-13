const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
// prevent button going to the site
  e.preventDefault()
  const link = this.getAttribute('link')

  try {
    await navigator.clipboard.writeText(link)
    alert("Link copiado para área de transferência")
  } catch (err) {
    console.error(err)
  }
}

shareButtons.forEach(shareButton => 
  shareButton.addEventListener('click', copyText))


const upShareButton = document.querySelectorAll('.share-button')
console.log(upShareButton)

async function copyText(e) {
// prevent button going to the site
  e.preventDefault()
  const link = this.getAttribute('link')

  try {
    await navigator.clipboard.writeText(link)
    alert("Link copiado para área de transferência")
  } catch (err) {
    console.error(err)
  }
}

upShareButton.forEach(upShareButton => 
  upShareButton.addEventListener('click', copyText))

  document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ["Olá! Sou <strong>João Pedro Batista</strong>, desenvolvedor full stack. Explore meus links, veja meus projetos e contate-me para <strong>trabalharmos juntos</strong>. Vamos criar algo incrível!"],
        typeSpeed: 30,
        backSpeed: 25,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|',
        loop: false,
        onComplete: function(self) {
            // Ocultar o cursor após a digitação ser concluída
            self.cursor.remove();
        }
    };

    const typed = new Typed('#typed-output', options);
});



