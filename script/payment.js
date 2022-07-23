let data = JSON.parse(localStorage.getItem("_data_"))

let promobtn = document.querySelector("#promoDiv>button")
promobtn.addEventListener("click", () => {
  let promoCode = document.querySelector("#promoDiv>input")
  if (promoCode.value == "masai30") {
    alert("You Will get 30% back on CheckIn")
  }else{
    alert("Enter Valid Promo")
  }
})
