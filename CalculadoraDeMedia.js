function verificar(){
let N1B = Number(document.getElementById('nota1B').value)
let N2B = Number(document.getElementById('nota2B').value)
let N3B = Number(document.getElementById('nota3B').value)
let N4B = Number(document.getElementById('nota4B').value)
let Nfinal = (N1B + N2B + N3B + N4B)/4
let NfinalFix = (Nfinal.toFixed(1))
if (NfinalFix >= 6) {
    res.innerHTML = `Sua média é ${NfinalFix}, você está aprovado`
} else {
    res.innerHTML = `Sua média é ${NfinalFix}, você está reprovado`
}
}