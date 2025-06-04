
const slideImage = [
    "Images/Beach01.jpg", "Images/SM02.jpg",
    "Images/BestView.jpg", "Images/SM03.jpg",
    "Images/Beach02.jpg", "Images/South View SM.jpg",
    "Images/ISM.jpg", "Images/SM01.jpg",
]

const galleryImages = [
    "Images/Beach01.jpg", "Images/BestView.jpg", 
    "Images/Beach02.jpg", "Images/Beach_forest.jpg",
    "Images/Beach02.jpg", "Images/Beach_forest.jpg",
    "Images/Beach01.jpg", "Images/BestView.jpg",
    "Images/Beach_forest.jpg", "Images/Beach01.jpg",
    "Images/BestView.jpg", "Images/Beach02.jpg"
]



function scrollToSection(className) {
  const section = document.querySelector(`.${className}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


//----------------GALERY---------------------
function createGallery(galleryImages){
    galleryContainer = document.querySelector(".gallery");

    for(let i = 0; i < galleryImages.length; i++){
        let div = document.createElement("div");
        div.className = "img-gallery"; 
        galleryContainer.appendChild(div);

        let img = document.createElement("img");
        img.src = galleryImages[i];
        div.appendChild(img);
    }
}

createGallery(galleryImages);




//-------------- FULL SCREEN GALLERY---------------------
const lightbox = document.getElementById('fullBox');
const lightboxImg = document.getElementById('fullBox-img');
const closeBtn = document.querySelector('.fullBox .close');

document.querySelectorAll('.img-gallery img').forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
  });
});

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(e) {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});




//--------------- SLIDE IMAGES -------------------------

let slide1 = document.getElementById("img-1");
let slide2 = document.getElementById("img-2");
let currentSlide = 0;

function nextSlide(){
  let next = (currentSlide+1)%slideImage.length;
  slide2.src = slideImage[next];

  slide1.classList.remove("show");
  slide1.classList.add("hide");

  slide2.classList.remove("hide");
  slide2.classList.add("show");

  [slide1, slide2] = [slide2, slide1];
  currentSlide = next;
}

setInterval(nextSlide, 5000);
 


let scrollHotel = document.querySelector(".hotels");
let back_btn = document.getElementById("back-btn");
let next_btn = document.getElementById("next-btn");

scrollHotel.addEventListener("wheel", (e)=>{
  e.preventDefault();
  scrollHotel.scrollLeft+= e.deltaY;
  scrollHotel.style.scrollBehavior = "smooth";
});

back_btn.addEventListener("click", ()=>{
  scrollHotel.style.scrollBehavior = "smooth";
  scrollHotel.scrollLeft-=450;
});
next_btn.addEventListener("click", ()=>{
  scrollHotel.style.scrollBehavior = "smooth";
  scrollHotel.scrollLeft+=450;
});






//--------------------- SUBMIT --------------
const Submit= () =>{
  document.getElementById("name").value="";
  document.getElementById("phone").value="";
  document.getElementById("email").value="";
  document.getElementById("subject").value="";
  document.getElementById("message").value="";
}


//------------------- MENU ----------------------
//let menu_icon = document.querySelector(".menu-icon");
let nav_menu = document.querySelector(".right-side-nav");
let menu_show = 0;

const navMenuShow = () =>{
  if(menu_show === 0){
    nav_menu.style.display = "block";
    menu_show = 1;
  }
  else{
    nav_menu.style.display = "none";
    menu_show = 0; 
  }

}



const translation = {
  en:{
    nav:["Home","Popular","Gallery","Review","Tip","Contact"],
    title:"Take your next vacation to the paradise Island",
    book: "Book",
    popular: "POPULAR PLACES",
    description:["A 3 stars hotel","A 3 stars hotel","A 3 stars hotel",
      "A 3 stars hotel","A 3 stars hotel","A 3 stars hotel",
      "A 3 stars hotel","A 3 stars hotel","A 3 stars hotel"
    ],
    follow_title:"Follow 515 Travel",
    follow_description:"Follow as on your choice of social media",
    reviews:["An unforgettable experience! The travel agency took care of every detail — from airport pickup to hotel bookings and daily activities. Sainte Marie was breathtaking, and the whale watching tour was the highlight of our trip. Highly recommended!",
      "Very professional and friendly team. They helped us plan a custom honeymoon trip and everything went smoothly. We loved the local food, beautiful beaches, and especially the small boat trip to Île aux Nattes.",
      "What we loved the most was how connected the agency is with the local community. The guides were locals, and we visited real villages, not tourist traps. We felt welcomed everywhere. Great service and authentic experience!"
    ],
    tips:["The island has a peaceful atmosphere with charming villages, local markets, and welcoming communities, offering a glimpse into real Malagasy coastal life. Every year, hundreds of humpback whales migrate to the warm waters around Sainte Marie to breed and give birth. The island offers one of the best whale-watching experiences in the Indian Ocean. Sainte Marie has stunning, quiet beaches with white sand and turquoise water — perfect for swimming, sunbathing, or relaxing in peace.",
      "Sainte Marie was once a pirate haven. You can visit the legendary Pirate Cemetery, the only known pirate graveyard in the world, with tombstones dating back to the 17th and 18th centuries. The island features lush vegetation, waterfalls, and unique wildlife like lemurs, chameleons, and endemic birds — ideal for nature walks or eco-tourism. The surrounding lagoons are ideal for snorkeling and diving, with vibrant coral reefs and abundant marine life, including turtles, rays, and tropical fish."
    ],
    forms:["Name","Phone","Email","Subject","Message","SUBMIT"],

  },
  fr: {
    nav: ["Accueil", "Populaires", "Galerie", "Avis", "Conseils", "Contact"],
    title: "Partez en vacances sur une île paradisiaque",
    book: "Réserver",
    popular: "LES PLACES POPULAIRE",
    description: [
      "Un hôtel 3 étoiles situé en bord de mer avec bungalows privés.",
      "Un hôtel 3 étoiles offrant une vue imprenable sur l'océan Indien.",
      "Un hébergement charmant avec piscine, restaurant et accès à la plage.",
      "Un hôtel éco-responsable entouré de jardins tropicaux.",
      "Un hôtel familial avec chambres climatisées et wifi gratuit.",
      "Un complexe paisible, idéal pour les lunes de miel.",
      "Un hôtel proche des activités nautiques comme la plongée et le kayak.",
      "Un hébergement chaleureux à deux pas des marchés artisanaux.",
      "Un hôtel moderne avec centre de bien-être et spa."
    ],
    follow_title: "Suivez 515 Travel",
    follow_description: "Suivez-nous sur les réseaux sociaux de votre choix",
    reviews: [
      "Une expérience inoubliable ! L'agence de voyage s'est occupée de tout — de la prise en charge à l'aéroport jusqu'aux réservations d'hôtel et aux activités quotidiennes. Sainte-Marie était à couper le souffle, et l'excursion pour voir les baleines a été le moment fort de notre séjour. Je recommande vivement !",
      "Équipe très professionnelle et sympathique. Ils nous ont aidés à organiser un voyage de noces sur mesure, et tout s'est parfaitement déroulé. Nous avons adoré la nourriture locale, les plages magnifiques, et surtout la petite excursion en bateau vers l'Île aux Nattes.",
      "Ce que nous avons le plus apprécié, c'est le lien de l'agence avec la communauté locale. Les guides étaient des habitants de l'île, et nous avons visité de vrais villages, loin des pièges à touristes. On s'est sentis bien accueillis partout. Excellent service et expérience authentique !"
    ],
    tips: [
      "L’île offre une ambiance paisible avec ses villages traditionnels, ses marchés locaux et ses habitants accueillants. Une immersion totale dans la vie côtière malgache. Chaque année, des centaines de baleines à bosse migrent vers les eaux chaudes autour de Sainte-Marie pour se reproduire et mettre bas. L’île offre l’une des meilleures expériences d’observation des baleines de l’océan Indien. Sainte-Marie possède de magnifiques plages calmes, au sable blanc et à l’eau turquoise — idéales pour se baigner, bronzer ou simplement se détendre.",
      "Sainte-Marie a été un repaire de pirates au XVIIe siècle. On peut y visiter le cimetière des pirates, unique au monde, avec de vieilles tombes et des histoires fascinantes. L’île regorge de forêts, de cascades et d’espèces endémiques comme les lémuriens, caméléons et oiseaux rares. Parfait pour des randonnées ou l’écotourisme. Les lagons entourant l’île sont parfaits pour la plongée avec tuba ou bouteille. On y trouve une vie marine riche : poissons tropicaux, tortues, raies, coraux colorés, etc."
    ],
    forms: ["Nom", "Téléphone", "Email", "Sujet", "Message", "ENVOYER"]
  }
  
}

const languageselection = document.querySelector("#language");

const setlanguage = (lang) =>{
  const tr = translation[lang];

  document.getElementById("home").textContent = tr.nav[0];
  document.getElementById("popular").textContent = tr.nav[1];
  document.getElementById("gallery").textContent = tr.nav[2];
  document.getElementById("review").textContent = tr.nav[3];
  document.getElementById("tip").textContent = tr.nav[4];
  document.getElementById("contact").textContent = tr.nav[5];

  document.getElementById("title").textContent = tr.title;
  
  document.querySelector(".popular-title").textContent = tr.popular;

  document.getElementById("h-name-a").textContent = tr.description[0];
  document.getElementById("h-name-b").textContent = tr.description[1];
  document.getElementById("h-name-c").textContent = tr.description[2];
  document.getElementById("h-name-d").textContent = tr.description[3];
  document.getElementById("h-name-e").textContent = tr.description[4];
  document.getElementById("h-name-f").textContent = tr.description[5];
  document.getElementById("h-name-g").textContent = tr.description[6];
  document.getElementById("h-name-h").textContent = tr.description[7];
  document.getElementById("h-name-i").textContent = tr.description[8];

  document.querySelector(".follow-title").textContent = tr.follow_title;
  document.querySelector(".follow-description").textContent = tr.follow_description;
  document.getElementById("review-a").textContent = tr.reviews[0];
  document.getElementById("review-b").textContent = tr.reviews[1];
  document.getElementById("review-c").textContent = tr.reviews[2];

  document.getElementById("tip-a").textContent = tr.tips[0];
  document.getElementById("tip-b").textContent = tr.tips[1];

  document.getElementById("name").placeholder = tr.forms[0];
  document.getElementById("phone").placeholder = tr.forms[1];
  document.getElementById("email").placeholder = tr.forms[2];
  document.getElementById("subject").placeholder = tr.forms[3];
  document.getElementById("message").placeholder = tr.forms[4];
  document.getElementById("submit-bt").textContent = tr.forms[5];

  document.querySelectorAll('.btn').forEach(button =>{
    button.textContent = tr.book;
  });
}

setlanguage('en');
languageselection.addEventListener('change', (e) =>{
  setlanguage(e.target.value);
});

