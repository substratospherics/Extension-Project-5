let numOfPeriods = 0;
let timesRan = 0;
let loadingAnimation;
let loadingDOM;
let creditPopUP;
let popup;
let close1;
let quiz;
document.addEventListener("DOMContentLoaded", runLoading);
let loadingEl;

function runLoading() {
  document.body.innerHTML += `
    <div id="loading">
        <h1 id="loadingText">Loading</h1>
        <h2></h2>
    </div>
    `;
  loadingEl = document.getElementById("loadingText");
  loadingDOM = document.getElementById("loading");
  loadingAnimation = setInterval(periods, 800);
}

function periods() {
  console.log("ran");
  timesRan++;
  loadingEl.textContent += ".";
  numOfPeriods++;
  if (numOfPeriods === 4 && timesRan !== 7) {
    loadingEl.textContent = "Loading";
    numOfPeriods = 0;
  }

  if (timesRan === 7) {
    stopLoading();
  }
}

function stopLoading() {
  const creditEL = document.querySelector("h2");
  clearInterval(loadingAnimation);
  loadingEl.textContent = "Finished!";
  creditEL.textContent = "Created by Riley, Eli, and Courtland";
  setTimeout(addMainDOM, 3000);
}

function addMainDOM() {
  document.body.innerHTML = `
        <header>
            <h1>Thermite</h1><button id="quiz">QUIZ</button>
        </header>
        <main>
            <h1>What is Thermite</h1>
            <p>Thermite is a type of compound that's mainly used in a lot of industrial applications, especially welding and cutting metal. It's a mixture of a metal powder, which is usually aluminum, and a metal oxide (for example, iron oxide). When thermite is ignited, it reacts exothermically (releasing heat) and produces a molten metal. Thermite reactions are highly exothermic, which means that they release a lot of heat. The heat is made by the oxidation of the aluminum, which releases a significant amount of energy. The reaction is also highly exothermic because the aluminum oxide that is produced is highly stable and doesn't react with the iron that is produced.</p>
            <h2>Picture of thermite:</h2>
            <img src="img4.jpg">
            <p>Thermite was first discovered in 1893 by a german chemist named Hans Goldschmidt. He was trying to find a way to make pure metals from their ores and then he found that by mixing powdered aluminum with metal oxides he could create a reaction that produced a very high temperature and pure metal as a byproduct. He first started to use this reaction to produce pure chromium, but he soon realized that it had other useful applications like welding.</p>
            <h2>A reaction taking place:</h2>
            <img src="img1.jpg" id="img1">
            <h1>More about Thermite</h1>
            <p>The most common type of thermite that is used in welding applications is aluminum-iron oxide thermite. This mixture contains finely powdered aluminum and iron oxide, which are very carefully mixed in a specific ratio. When this is ignited, the aluminum reacts with the iron oxide, which in turn produces iron and aluminum oxide as products. This reaction releases an insane amount of heat, which is often used in welding and cutting applications.</p>
            <img src="img2.jpg" id="img2">
            <p>One of the biggest advantages of using thermite for welding is its ability to create high temperatures, which can go up to 2500 degrees Celsius. This high temperature is essential for welding thick materials, as it makes sure that the material melts completely and fuses together. Thermite welding is also used in deep-sea welding as it does not require any external power sources.</p>
            <p>Thermite is also really useful for repairing railroad tracks and other big metal structures. To do this, thermite is poured into a premade mold and placed over the broken section of the track. The heat that's made from the thermite melts the metal, which then fuses with the surrounding metal to make a very solid and durable bond.</p>
            <h2>Thermite repairing a railroad in action:</h2>
            <img src="img3.jpg">
            <p>One of the disadvantages of doing thermite reactions is that they are very difficult to control once ignited; the reaction cannot be stopped and it produces a lot of heat and light. This can make it challenging to use thermite in certain situations, like in confined spaces or near flammable materials.</p>
            <p>Thermite is a very interesting compound that has many useful applications in industry, and its ability to produce high temperatures and pure metals makes it an ideal choice for welding and metal cutting. However, while doing this type of reaction, you have to be sure to take proper safety precautions to prevent accidents and injuries.</p>
            <h1>Sources:</h1>
            <p><a href="https://www.britannica.com/science/Thermit">Britannica - Thermit</a></p>
            <p><a href="https://www.chemistrylearner.com/thermite-reaction.html">Chemistry Learner - Thermite Reaction</a></p>
            <p><a href="https://www.thoughtco.com/thermite-reaction-instructions-and-chemistry-604261">ThoughtCo - What Is A thermite Reaction in Chemistry?</a></p>
            <p><a href="https://en.citizendium.org/wiki/Thermite">Citizendium - Thermite</a></p>
            <p><a href="http://www.railway-fasteners.com/news/what-is-railroad-thermite-welding.html#:~:text=The%20railroad%20thermite%20welding%20is,of%20thermite%20welding%20is%20widespread.">Agico Group - What Is railroad Thermite Welding?</a></p>
        </main>
        <footer>
    				<button id="creditsPopUp">Credits</button>
        </footer>
        <div class="hide" id="popup">
            <h1 id="credz">Credits:</h1>
        	<h2 id="credz2">Created by Eli, Riley, and Courtland</h2>
            <button id="close">CLOSE</button>
        </div>
  `;
  quiz = document.getElementById("quiz");
  quiz.addEventListener("click", comingSoon);
  popup = document.getElementById("popup");
  close1 = document.getElementById("close");
  close1.addEventListener("click", closePop);
  creditPopUP = document.getElementById("creditsPopUp");
  creditPopUP.addEventListener("click", popUP);
}

function popUP() {
  popup.style.display = "block";
  popup.style.display = "flex";
}

function closePop() {
  popup.style.display = "none";
}

function comingSoon() {
  quiz.textContent = "Coming Soon!";
  setTimeout(setBack, 2000);
}

function setBack() {
  quiz.textContent = "QUIZ";
}
