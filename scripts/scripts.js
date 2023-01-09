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