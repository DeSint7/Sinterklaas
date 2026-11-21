(function () {
  var invoer = document.getElementById("code");
  var knop = document.getElementById("gereed");
  var melding = document.getElementById("melding");
  var qrVak = document.getElementById("qr");
  var qrTekst = document.getElementById("qr-tekst");

  // Alleen cijfers toestaan
  invoer.addEventListener("input", function () {
    invoer.value = invoer.value.replace(/\D/g, "").slice(0, 4);
  });

  function maakQr() {
    var code = invoer.value;
    melding.textContent = "";

    if (!/^\d{4}$/.test(code)) {
      qrVak.innerHTML = "";
      qrTekst.textContent = "";
      melding.textContent = "Vul precies 4 cijfers in.";
      return;
    }

    var qr = qrcode(0, "M");
    qr.addData(code);
    qr.make();
    qrVak.innerHTML = qr.createSvgTag({ cellSize: 8, margin: 0, scalable: true });
    qrTekst.textContent = "Code: " + code;
  }

  knop.addEventListener("click", maakQr);
  invoer.addEventListener("keydown", function (e) {
    if (e.key === "Enter") maakQr();
  });
})();
