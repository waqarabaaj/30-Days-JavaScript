const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is the resolved message after 2 seconds");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});
