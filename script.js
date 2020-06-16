let choose_language = document.getElementById("choose_language");
choose_language.addEventListener("click", choose_language_func);

let english = 1;
let spanish = 0;
let language = english;

function choose_language_func(){
    console.log(language)
    if(language == english){
        console.log("changing to spanish",language)
        document.getElementById("choose_language").textContent = "English"
        document.getElementById("mainPic").src = "images/mainPicSpanish.png";
        document.getElementById("header1").textContent = "Bienvenido a Sembrar!";
        document.getElementById("paragraph1").textContent = "Nuestro objetivo en Sembar es introducir los conceptos de consentimiento, límites, y autonomía corporal para los niños y sus familias. La esperanza es plantar estas ideas en los primeros años de la infancia los niños estarán equipados con las herramientas necesitan navegar estableciendo límites en las relaciones actuales y futuras."
        document.getElementById("header2").textContent = "Nuestra Mission";
        document.getElementById("paragraph2").textContent = "La misión de Sembrar es proporcionar a los padres y cuidadores herramientas para comience la conversación sobre el consentimiento a una edad temprana. Lo sé por mí mismo y mis padres hablar sobre el consentimiento fue difícil y ambos no sabíamos dónde para comenzar. Espero que estas tarjetas brinden a los niños y a sus padres un punto de partida."
        document.getElementById("foot_mission_text").textContent = "La misión de Sembrar es proporcionar a los padres y cuidadores herramientas para comenzar la conversación sobre el consentimiento a una edad temprana."
        document.getElementById("foot_mission_header").textContent = "Nuestra Mission";
        language = spanish;
    }
    else if(language == spanish){
        console.log("inside span",language)
        document.getElementById("choose_language").textContent = "Español";
        document.getElementById("mainPic").src = "images/mainPicEnglish.png";
        document.getElementById("header1").textContent = "Welcome to Sembrar!";
        document.getElementById("paragraph1").textContent = "Our goal at Sembar is to introduce the concepts of consent, boundaries, and body autonomy to children and their families. The hope is by planting these ideas early in childhood children will be equipped with the tools they need to navigate setting boundaries in current and future relationships.";
        document.getElementById("header2").textContent = "Our mission";
        document.getElementById("paragraph2").textContent = "The mission of Sembrar is to provide parents and caregivers with tools to begin the conversation about consent at a young age. I know for myself and my parents talking about consent was difficult and we both did not know where to start. I hope that these cards provide children and their parents with a starting point.";
        document.getElementById("foot_mission_text").textContent = "The mission of Sembrar is to provide parents and caregivers with tools to begin the conversation about consent at a young age.";
        document.getElementById("foot_mission_header").textContent = "Our Mission";
        language = english;
    }
}
