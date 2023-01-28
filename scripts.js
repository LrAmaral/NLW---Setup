const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//eventos de clique e mudança
button.addEventListener("click", add) //adiciona algo que "ouve" o evento
form.addEventListener("change", save)  


function add() { 
  const today = new Date().toLocaleDateString('pt-br')
  const dayExists = nlwSetup.dayExists(today) //verifica se o dia existe

  if (dayExists) {
    alert("Dia já incluso 🛑")
    return
  }

  alert('Dia adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}
 
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
}
 
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"], //isto é um array
//   water: ["01-04", "01-05"],
//   food: ["01-01"],
//   journal: ["01-02"],
//   takePills: ["02-05"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // duas barras é "ou" em JS;
//vai procurar os dados salvos e manter mesmo atualizando a página

nlwSetup.setData(data)
nlwSetup.load()
