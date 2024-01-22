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
  const tarts = (() => { // start
    const _ = new Date(date);
    _.setDate(1);
    return _.getDay();
  })();
  const den = (() => { // end
    switch (m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:  // february >:(
        // leap 🐸
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return 29;
        } else {
          return 28;
        }
    }
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
    if (number > 0 && number <= den) {
      td.innerHTML = `${number}`;
    } else {
      td.classList.add("disabled");
    }
  }

  tr = document.createElement("tr");
  thead.appendChild(tr);
  for (let i = 0; i < 7; i++) {
    td = document.createElement("th"); // not actually td shhh
    tr.appendChild(td);
    td.innerHTML = "mtwtfss"[i];
  }

  h1.innerHTML = "hi"; // h1 = hi
  p.textContent = "this should work better tomorrow";
  
};

window.addEventListener("load", function(event) {
  generate(new Date()); // for now
});