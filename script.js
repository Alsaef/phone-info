const dataLoad=(search)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => LoadSingleData(data.data))
    prossingLoad(true)
}

const LoadSingleData=(phoneData)=>{
  console.log(phoneData);
  const noFound=document.getElementById("not-found");
  if (phoneData.length==0) {
    noFound.classList.remove("d-none")
  } else {
    noFound.classList.add("d-none")
  }
  const mainCard=document.getElementById("mainCard");
  mainCard.innerHTML=``;
  for (const data of phoneData) {
    console.log(data);
    const cardDiv=document.createElement("div");
    cardDiv.innerHTML=`
    <div class="col">
              <div class="card p-2">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.phone_name}</h5>
                  <h4 class="card-text">${data.brand}</h5>
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="phoneDataLoad('${data.slug}')">Phone Information <i class="fa-solid fa-circle-info"></i></button>
                </div>
              </div>
            </div>
    `;
    mainCard.appendChild(cardDiv);
  }
  prossingLoad(false)
}
const phoneDataLoad=(id)=>{
  const url=`https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => poneInfo(data.data))
}
const poneInfo=(info)=>{
  console.log(info)
  const phoneName=document.getElementById('exampleModalLabel');
  phoneName.innerText=`${info.name}`;
  const fullInfo=document.getElementById("full-info");
  fullInfo.innerHTML=`
  <img src="${info.image}" alt=""> <br>
  <h5>${info.releaseDate}</h5>
  <h6>Storage: ${info.mainFeatures.memory}</h6>
  <h6>Display Size: ${info.mainFeatures.displaySize}</h6>
  <div>
  <p>Feture</p>
  <ul>
  <li>${info.mainFeatures.sensors[0]?info.mainFeatures.sensors[0]:"not available"}</li>
  <li>${info.mainFeatures.sensors[1]?info.mainFeatures.sensors[1]:"not available"}</li>
  <li>${info.mainFeatures.sensors[2]?info.mainFeatures.sensors[2]:"not available"}</li>
  <li>${info.mainFeatures.sensors[3]?info.mainFeatures.sensors[3]:"not available"}</li>
  <li>${info.mainFeatures.sensors[4]?info.mainFeatures.sensors[4]:"not available"}</li>
  <li>${info.mainFeatures.sensors[5]?info.mainFeatures.sensors[5]:"not available"}</li>
  </ul>
  </div>
  `
}
function Scarch() {
    const searchFild=document.getElementById("scarch");
    const searchValue=searchFild.value;
    dataLoad(searchValue)
    const clear=document.getElementById("clear-slider")
    clear.style.display="none"
}
document.getElementById("search-btn").addEventListener("click",function () {
    prossingLoad(true)
    Scarch()
})
document.getElementById('scarch').addEventListener("keypress",function (event) {
    if (event.key=="Enter") {
        prossingLoad(true)
        Scarch()
    }
  })
function prossingLoad(isLoad) {
    const loadProsses=document.getElementById("load-data");
    if (isLoad) {
        loadProsses.classList.remove("d-none")
    } else {
        loadProsses.classList.add("d-none") 
    }
}
dataLoad("iphone")