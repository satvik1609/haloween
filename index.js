const btr = document.getElementById("btr")
btr.addEventListener('click', () => {
  alert("Nice Try")
  window.close()
})

document.addEventListener("mousemove", (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonbox = btr.getBoundingClientrect()
  console.log(buttonbox.x, buttonbox.y)
})
function distanceFromCenter(boxPosition, mousePosition, boxsize){
  return boxPosition - mousePosition + boxsize / 2
}
