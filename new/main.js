// hi

const now = new Date();
const the_date = new Date();

function generate(date) { // genedate(rate)
  
  // const spam yay
  const sidebar = document.querySelector("aside"); // not using IDs for fun
  const main = document.querySelector("main");
  const div = document.querySelector("main div");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const side_div = document.querySelector("aside > div");
  const side_table = document.querySelector("aside table");
  const side_thead = document.querySelector("aside thead");
  const side_tbody = document.querySelector("aside tbody");

  const wow = new Date(date);
  const y = wow.getFullYear();
  const m = wow.getMonth()+ +([]+[+!+[]]); // wow!
  const d = wow.getDate();
  const today_number = (now.getFullYear() === y && now.getMonth() === wow.getMonth()) ? now.getDate() : -192119;
  const tarts = (() => { // start
    const _ = new Date(date);
    _.setDate(1);
    return _.getDay();
  })();
  const den = [0, 31, 28 + ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m]; // 1 line?
  
  const m_string = ["null 💀", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m];
  side_div.innerHTML = `
    <input type="button" value="←" class="left">
    <h1 style="display: inline-block; min-width: 7.5em;">${m_string} ${y}</h1>
    <input type="button" value="→" class="right">
    <div style="left: -100px; top: -100px;" class="box"></div>
    <div style="left: -100px; top: -100px;" class="box box2"></div>
  `;
  const side_box = document.querySelector("aside div.box");
  const side_box2 = document.querySelector("aside div.box2");

  console.log(y, m, d); // ok looks fine

  side_thead.innerHTML = "";
  side_tbody.innerHTML = "";

  let tr, td;
  for (let i = 0; i < 35; i++) {
    let x = i % 7;
    let y = Math.floor(i / 7);
    if (!x) { // remember to eventually replace with x === 0
      tr = document.createElement("tr");
      side_tbody.appendChild(tr);
    }
    td = document.createElement("td");
    tr.appendChild(td);
    const number = i - tarts;
    if (number > 0 && number <= den) {
      td.innerHTML = `${number}`;
    } else {
      td.innerHTML = "0";
      td.classList.add("disabled");
    }
    if (number === today_number) {
      td.classList.add("today");
    }
    const the_td = td;
    the_td.addEventListener("mouseover", (_) => {
      side_box2.style.left = `calc(${the_td.getBoundingClientRect().left + window.scrollX}px - 0.7em)`;
      side_box2.style.top = `calc(${the_td.getBoundingClientRect().top + window.scrollY}px - 0.7em)`;
    });
    the_td.addEventListener("click", (_) => {
      side_box.style.left = `calc(${the_td.getBoundingClientRect().left + window.scrollX}px - 0.7em)`;
      side_box.style.top = `calc(${the_td.getBoundingClientRect().top + window.scrollY}px - 0.7em)`;
    });
  }

  tr = document.createElement("tr");
  side_thead.appendChild(tr);
  for (let i = 0; i < 7; i++) {
    td = document.createElement("th"); // not actually td shhh
    tr.appendChild(td);
    td.innerHTML = "mtwtfss"[i];
    td.classList.add("spin");
  }

  document.querySelector("input[type=button].left").addEventListener("click", function(event) {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    generate(date);
  });

  document.querySelector("input[type=button].right").addEventListener("click", function(event) {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    generate(date);
  });

  p.textContent = "this is the sidebar";
  div.innerHTML = "lorem\n\n\n\n\n\n\n\n\n\n\n\nipsusm\n\n\n\n\n\n\n\n\n<br>\n\n\n\nlarge\ncalendar"; // answer is 4 letters :)
  
};

window.addEventListener("load", function(event) {
  generate(the_date); // still for now
});