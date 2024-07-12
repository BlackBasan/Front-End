import { searchShows } from "../modules/tvmaze-api.js";

let timer = null;

const lstTvShows = document.getElementById("lstTvShows");

document.getElementById("txtSearch").addEventListener("input", (e)=>{
    const query = e.target.value;

    if(timer) clearTimeout(timer);
    timer =  setTimeout(()=>{
        searchShows(query, (shows)=>{
            //console.log(shows)
            createShows(shows)

        })
        
    }, 500)  
})

lstTvShows.addEventListener("click", (e)=>{
    const cardItem = e.target.closest(".card");
    console.log(cardItem)
    const showId = cardItem.dataset.showid;
    location.href = `105-fetch-practice.html?id=${showId}`
    
})

const createShows = (shows) => { 
    lstTvShows.innerHTML = "";

    shows.forEach((item)=>{
        const showCard = createCard(item)
        lstTvShows.insertAdjacentHTML("afterbegin", showCard)
    });

 }

 const createCard = (cardItem)=>{

    const {id, image, name, genres} =cardItem.show;
    let showImage = "assets/img/no-image.png"
    if(image){
        showImage = image.medium;
    }
    
    return `
    <div class="col  mt-4 col-12 col-sm-5 col-md-4 col-lg-3" >
        <div class="card h-100 text-center " data-showid =${id} >
            <img src="${showImage}" class="card-img-top" alt="${name}" />
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                ${genres.join(", ")}
                </p>
            </div> 
        </div>
    </div>
    `
 }




