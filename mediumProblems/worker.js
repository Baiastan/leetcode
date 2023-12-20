onmessage = function (e) {
  console.log("Worker: Message was received from main script");

  console.log(e.data);

  const result = e.data[0] * e.data[1];
  postMessage(result);
};

//or

// addEventListener("mesasge", (event) => {
//   console.log(event.data[0] + event.data[1]);
// });
