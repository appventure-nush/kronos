// hi

function generate(date) { // genedate(rate)
  
  // const spam yay
  const sidebar = document.querySelector("aside"); // not using IDs for fun
  const div = document.querySelector("div");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const table = document.querySelector("table");
  const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  const wow = new Date(date);
  const y = wow.getFullYear();
  const m = wow.getMonth()+ +([]+[+!+[]]); // wow!
  const d = wow.getDate();
  const tarts = (() => {
    const _ = new Date(date);
    _.setDate(1);
    return _.getDay();
  })();

  console.log(y, m, d); // ok looks fine

  let tr, td;
  for (let i = 0; i < 35; i++) {
    let x = i % 7;
    let y = Math.floor(i / 7);
    if (!x) { // remember to eventually replace with x === 0
      tr = document.createElement("tr");
      tbody.appendChild(tr);
    }
    td = document.createElement("td");
    tr.appendChild(td);
    const number = i - tarts;
    if (number > 0 && number < 31) {
      td.innerHTML = `${number}`;
    }
  }

  tr = document.createElement("tr");
  thead.appendChild(tr);
  for (let i = 0; i < 7; i++) {
    td = document.createElement("th"); // not actually td shhh
    tr.appendChild(td);
    td.innerHTML = "mtwtfss"[i];
  }

  h1.innerHTML = "hi"; // hi = h1
  p.textContent = "this should look better tomorrow";
  
};

window.addEventListener("load", function(event) {
  generate(new Date()); // for now
});