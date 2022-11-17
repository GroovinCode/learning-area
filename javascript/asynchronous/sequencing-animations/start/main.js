const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*const nextAnimation = alice1.animate(aliceTumbling, aliceTiming); 
nextAnimation.finished.then(() => {
  ani2 = alice2.animate(aliceTumbling, aliceTiming);
    ani2.finished.then(() => {
      alice3.animate(aliceTumbling, aliceTiming);
    });
});*/
  
async function ani(alice) {
  const ani1 = alice1.animate(aliceTumbling, aliceTiming);
  await ani1.finished;
  const ani2 = alice2.animate(aliceTumbling, aliceTiming);
  await ani2.finished;
  alice3.animate(aliceTumbling, aliceTiming);
}

ani();
