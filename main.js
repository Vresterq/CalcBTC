let calcButton = document.querySelector(".button");

calcButton.addEventListener("click", function () {
  let result = document.querySelector(".result");
  const usdInput = document.querySelector(".USD").value;
  const btcInput = document.querySelector(".BTC").value;

  if (usdInput == "" || btcInput == "") {
    result.innerHTML = `<p style="color:red">Введіть дані</p>`;
  } else if (usdInput < 1 || btcInput < 1) {
    result.innerHTML = `<p style="color:red">Ви ввели неприпустиме значення</p>`;
  } else {
    const res = usdInput / btcInput;
    result.innerHTML = `Ви можете купити <b>${res.toFixed(8)}</b> BTC `;
  }
});
