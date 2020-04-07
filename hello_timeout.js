const sentence = ['4311o', 'th3r3', 'w0r1d']; //array
let i = 0; //counter
const f = () => setTimeout(() => {
  console.log(sentence[i++]); 
  if (i < sentence.length) { //loop
    f();
  }
}, 1000); // delay

f();