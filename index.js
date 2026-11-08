function generatePoem(event) {
    event.preventDefault();
   alert("Generating Poem"); 

   let poemElement = document.querySelector("#poem");
   poemElement.innerHTML = "Generating a Poem";

   new Typewriter('#poem', {
  strings: ['Une idée voyage au gré de la chance.'],
  autoStart: true,
  delay: 1,
  cursor: "",
});

}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("click", generatePoem);