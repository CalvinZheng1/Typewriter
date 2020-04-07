let input = process.argv.slice(2);
const beep = (alarms) => {
  for(let each of alarms) {
    if(each > 0) {
      setTimeout( () => {
        process.stdout.write('\x07');
      }, each * 1000);
    }
  }
};
beep(input);