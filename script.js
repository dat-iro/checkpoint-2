class Wallet {
  owner = this.owner;
  amount = this.amount;
}

const walletButton = document.getElementById("btn");
const userArr = document.getElementById("owner");
const total = document.getElementById("amount");

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data
}

async function getData() {
  try {
    const response = await fetchData();
    console.log(response);

    userArr.innerText = `${response.results[0].name.first}`


  } catch (error) {
    
  }
  
}

walletButton.addEventListener("click", getData);