const sentence = "hello there from lighthouse labs";

for (let i = 0; i <= sentence.length; i++) {
  delay = (i*50);
  if (i === sentence.length) {
    setTimeout(()=> {
      process.stdout.write("\n");
    }, delay)
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay)
  }
};

