import { countryL } from "./codes.js";
const selects = document.getElementsByClassName("selects");
let para=document.querySelector(".paragrap p")
const btn=document.querySelector("button");
const inp=document.querySelector("input");
const from=document.querySelector(".from-select");
const to=document.querySelector(".to-select");
const amount=document.querySelector(".amount")

// select option
for (let select of selects) {
for (let code in countryL) {
    const option = document.createElement("option");
    option.value = code;
    option.innerText = code;
    select.appendChild(option);
}
}
// convert
btn.addEventListener("click", async () => {
    const amt=parseFloat(amount.value);

    if(isNaN(amt) || amt <=0){
        para.innerHTML="please enter valid amount";
        return;
    }
    try {
const res = await fetch( `https://open.er-api.com/v6/latest/${from.value}`);    
    const data = await res.json();
    const rate = data.rates[to.value];
    const result = (amt* rate).toFixed(2);
    para.innerText =` ${amt} ${from.value} = ${result} ${to.value}`;
    } catch (err) {
    para.innerText = "Error fetching currency data";
    }
});

// button
// btn.addEventListener("click",() =>{
//     // print value in para
//     para.innerText=`${inp.value} USD = ${inp.value} INR`;

// });


