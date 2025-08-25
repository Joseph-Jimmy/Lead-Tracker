const inputbtn = document.getElementById("save");
const inputvar = document.getElementById("input-el");
const ulEl = document.getElementById("yo");
const inputbtn2 = document.getElementById("reset")
let lead = [];
// let leadfromlocalstorage = JSON.parse(localStorage.getitem("leads"))//this stores the items in db/local storage
if (localStorage.getItem("lead")) {
  lead = JSON.parse(localStorage.getItem("lead"));
  render()
}

// console.log(localStorage)

inputbtn.addEventListener("click", function () {
  //its used an alternative for onclick() function from html
  lead.push(inputvar.value); // .value function takes the value stored in the inputvar variable
  localStorage.setItem("lead", JSON.stringify(lead));
  inputvar.value = ""; //clears the value on the bar upon pressing save
  // localStorage.setItem("lead",JSON.stringify(lead))//saves value in db as string its a key value pair

  render();
  console.log();
});

inputbtn2.addEventListener("click", function () {
  localStorage.clear();//clears the info in the local storage
  lead = [];
  render();
})

function render() {
  let listitems = "";
  for (let i = 0; i < lead.length; i++) {
    //listitems += "<li><a target='_blank' href='#'>"+lead[i]+ "</a></li>" //we have to use += instead of = or else it will only show the last value of the loop and <a></a> turns it into a link format and target makes it open a new tab
    listitems += `<li>
                <a target='_blank' href='${lead[i]}'>
                    ${lead[i]}
                </a> 
            </li>`; //$ back ticks allow us to chop the code into different lines and ${} makes us put variables in string form
  }
  ulEl.innerHTML = listitems; //put html content via js textcontent ignores html tags this one actually executes the html tags and displays it
}
