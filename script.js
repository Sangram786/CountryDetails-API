const countryEle = document.querySelector(".countries");
const search = document.querySelector(".search");
const countryName = document.getElementsByClassName('countryName');
 



async function getCountry() {
  const url = await fetch("https://restcountries.com/v3.1/all");
  const res = await url.json();
  console.log(res);
  res.forEach((element) => {
    showCountry(element);
  });
}

getCountry();

function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
    <img src="${data.flags.svg}" alt="" />
  </div>
  <div class="country-info">
    <h3 class = "countryName">${data.name.common}</h3>
    <p><strong>Population :</strong> ${data.population}</p>
    <p><strong>Region :</strong> ${data.region}</p>
    <p><strong>Capital :</strong> ${data.capital}</p>
   
    </div> `;

  countryEle.appendChild(country);
}

search.addEventListener("input",()=>{
    console.log(search.value);
})



search.addEventListener("input",()=>{
    Array.from(countryName).forEach(ele =>{
        if (ele.innerText.toLowerCase().includes(search.value.toLowerCase())){
            ele.parentElement.parentElement.style.display = "grid"
        } else{
            ele.parentElement.parentElement.style.display = "none"
        }
    })
});

toggle.addEventListener("click",()=>{
    document.body.classList.toggle = "dark"
})