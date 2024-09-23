// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Oh no something went wrong")), 1000);
// });

const promise = Promise.resolve(3);

// Promise.all([Promise.resolve(3), Promise.resolve(2), new Promise((res, rej) => setTimeout(() => res(5), 1000))]).then(
//   console.log
// ); // in Promise.all if one promise gets rejected, all promises will get rejected.
//it either resolves all promises and returns resolved ones after all of them are resolved.

// Promise.race = gets resolved the first resolved pormise. It forgets about other promises after first promise is resolved first
//Promise.any = waits for first any of the promises with resolved state, then return resolved promise and ignores other promises even if they are rejected.

// Promise.any([
//   new Promise((res, rej) => setTimeout(() => res(1), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(2), 2000)),
//   new Promise((res, rej) => setTimeout(() => rej(3), 1000)),
// ]).then(console.log);

async function tester() {
  try {
    const value = await new Promise((res, rej) => setTimeout(() => rej("Something went wrong"), 1000));

    return value;
  } catch (error) {
    console.log("Oh no " + error);
  }
}

tester().then((value) => console.log(value));
