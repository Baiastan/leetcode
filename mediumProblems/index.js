if (window.Worker) {
  const myWorker = new Worker("worker.js");

  myWorker.postMessage({ nums: [10, 5] }); //Sending data to our worker;
  myWorker.onmessage = function (e) {
    console.log("Message received from worker:", e.data);
  };

  myWorker.terminate();
} else {
  console.log("Your browser does not support web workers");
}
