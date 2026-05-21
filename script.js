const logs = [
  "192.168.0.10 - Login Failed",
  "10.0.0.25 - Malware Detectado",
  "172.16.5.14 - Firewall Bloqueou Acesso",
  "192.168.1.50 - Tentativa de Intrusão",
  "10.0.0.8 - VPN Conectada",
];

// ================= LOGS =================

const logContainer = document.createElement("div");
logContainer.classList.add("logs");

const title = document.createElement("h2");
title.innerText = "Logs de Segurança";

logContainer.appendChild(title);

logs.forEach((log) => {
  const p = document.createElement("p");
  p.innerText = log;
  logContainer.appendChild(p);
});

document.body.appendChild(logContainer);

// ================= ATAQUES =================

const ataques = document.querySelectorAll(".card p")[1];

let numero = 87;

setInterval(() => {
  numero++;
  ataques.innerText = numero;
}, 3000);

// ================= RELÓGIO =================

function atualizarRelogio() {
  const agora = new Date();

  document.getElementById("clock").innerText = agora.toLocaleTimeString();
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
