const sentence = "hello there from lighthouse labs \n";
for (const [i, char] of sentence.split("").entries()) {
  setTimeout(() => {
      process.stdout.write(char); 
  },i *  50) 
  }