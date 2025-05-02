const goochCrucible = document.getElementById("gooch-crucible");
const spatula = document.getElementById("spatula");



let step = 0;


goochCrucible.addEventListener('click', async() => {
  //goochCrucible.style.transform = "translate(10vw, 5vh)";

  await delay(1000);
});

spatula.addEventListener('click',async()=>{
  spatula.style.transform="translate(0vw,-50vh)";
  await delay(1000);
  spatula.style.transform="translate(-47vw,-50vh)";
  await delay(1000);
  spatula.style.transform="translate(-47vw,-42vh) rotate(-20deg)";
  await delay(1000);
  spatula.style.transform="translate(-49vw,-40vh) rotate(-32deg)";
  await delay(1000);
  spatula.style.transform="translate(-47vw,-42vh) rotate(-20deg)";
  await delay(1000);
  spatula.style.transform="translate(-47vw,-50vh)";

  await delay(1000);
  spatula.style.transform="translate(-56vw,-50vh)";

  await delay(1000);
  spatula.style.zIndex="10"
  spatula.style.transform="translate(-57vw,-29vh) rotate(-20deg)";

  
})








function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
