
function printing () {
  console.log(1)
  setTimeout(function() {
    console.log(2)
  }, 4000)
  setTimeout(() => {
    console.log(3)
  }, 3000)
  console.log(4)
}
printing();
