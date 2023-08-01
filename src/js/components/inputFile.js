let inputs = document.querySelectorAll(".input-file__input");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling
  let labelVal = label.querySelector(".input-file__text").innerText;
  let labelText = label.querySelector(".input-file__text")
  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if(label.classList.contains('input-file__label-added')) label.classList.remove('input-file__label-added')
    if (countFiles){
      if(countFiles === 1) {
        labelText.innerText = this.files[0].name
      } else {
        labelText.innerText = ''
        Array.from(this.files).forEach(f => {
          labelText.innerText += f.name + '\n'
        })
      }
      label.classList.add('input-file__label-added')
    }
    else labelText.innerText = labelVal;
  });
});
