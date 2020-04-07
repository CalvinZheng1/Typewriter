const sentence = "hello there from lighthouse labs \n"; 
for (const [i, char] of sentence.split("").entries()) { //loop through and split to each char
  setTimeout(() => {
    console.log(char);  //console log each char
  },i * 100) //timer 
  }