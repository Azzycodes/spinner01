const order = function(char, increment) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  },increment);
};
const rotate = function() {
  let charArray = ["|","/","-","\\", "|", "/","-","\\"];
  let delay = 300;
  for (let char of charArray) {
    order(char, delay);
    delay += 300;
  }
};

rotate();