let startButton = document.getElementById("start");
startButton.addEventListener("click", startFunction);

let get_restaurants = document.getElementById("get_restaurants");
get_restaurants.addEventListener("click", getRestaurants);

let keywords = document.getElementById("keywords");
let locations = document.getElementById("location");

/*
User clicks start new game, hide start new game,
shows search bar, Gets randomID from server, displays link
*/
function startFunction(){
  startButton.className = "hidden";
  document.getElementById("search_bar").className = "shown";
  
  let xhr = new XMLHttpRequest;
  xhr.open("GET","/startNewGame");
  xhr.setRequestHeader("Content-Type", "application/json"); 

  xhr.onloadend = function(e) {
    console.log(xhr.response); 
    document.getElementById("link").href = "https://majestic-silky-calendula.glitch.me/"+xhr.response;
    document.getElementById("link").textContent = "https://majestic-silky-calendula.glitch.me/viewer.html?id="+xhr.response;

    if (xhr.readyState === 4 && xhr.status === 200) { 
       console.log("JSON sent to server");
    }
  }
  xhr.send();
}



function getRestaurants(){
  let search = {term: keywords.value, location: locations.value};
  
  let xhr = new XMLHttpRequest;
  xhr.open("POST","/yelpAPI", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onloadend = function(e) {
    let businessList = JSON.parse(xhr.response);
    
    document.getElementById("business1").textContent = businessList[0].name;
    document.getElementById("business2").textContent = businessList[1].name;
    document.getElementById("business3").textContent = businessList[2].name;
    document.getElementById("business4").textContent = businessList[3].name;
    document.getElementById("business5").textContent = businessList[4].name;
    document.getElementById("business6").textContent = businessList[5].name;
    
    document.getElementById("business1_pic").src = businessList[0].image_url;
    document.getElementById("business2_pic").src = businessList[1].image_url;
    document.getElementById("business3_pic").src = businessList[2].image_url;
    document.getElementById("business4_pic").src = businessList[3].image_url;
    document.getElementById("business5_pic").src = businessList[4].image_url;
    document.getElementById("business6_pic").src = businessList[5].image_url;
    
    document.getElementById("business1_rating").textContent = businessList[0].rating;
    document.getElementById("business2_rating").textContent = businessList[1].rating;
    document.getElementById("business3_rating").textContent = businessList[1].rating;
    document.getElementById("business4_rating").textContent = businessList[1].rating;
    document.getElementById("business5_rating").textContent = businessList[1].rating;
    document.getElementById("business6_rating").textContent = businessList[1].rating;

    document.getElementById("business1_reviews").textContent = businessList[0].review_count;
    document.getElementById("business2_reviews").textContent = businessList[1].review_count;
    document.getElementById("business3_reviews").textContent = businessList[2].review_count;
    document.getElementById("business4_reviews").textContent = businessList[3].review_count;
    document.getElementById("business5_reviews").textContent = businessList[4].review_count;
    document.getElementById("business6_reviews").textContent = businessList[5].review_count;
                             
    document.getElementById("business1_price").textContent = businessList[0].price;
    document.getElementById("business2_price").textContent = businessList[1].price;
    document.getElementById("business3_price").textContent = businessList[2].price;
    document.getElementById("business4_price").textContent = businessList[3].price;
    document.getElementById("business5_price").textContent = businessList[4].price;
    document.getElementById("business6_price").textContent = businessList[5].price;


    if (xhr.readyState === 4 && xhr.status === 200) { 
       console.log("JSON sent to server");
    }
  }
  
  xhr.send(JSON.stringify(search));
}




function createId() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 22; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
