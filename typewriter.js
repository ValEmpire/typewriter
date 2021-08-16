const sentence = "hello there from lighthouse labs";

let increment = 0;

for (let i = 0; i < sentence.length + 1; i++) {
  setTimeout(() => {
    if(i + 2 === sentence.length + 2){
      process.stdout.write('\n')
    }else{
      process.stdout.write(sentence.charAt(i))
    }
  }, increment+=50);
}
