/*
try {
  setTimeout(() => { throw new Error('kabum'); }, 1000);
} catch {
  console.log("i'll never be hit :(");
}
*/

function asyncfy (generatorFn) {
  const myIterator = generatorFn();

  // recursive function that continue to feed itself
  // yielded Promises until there are none left
  
  const runNext = ({ value, done }) => {
    if (done) return;

    value.then(() => runNext(myIterator.next()));
  };

  runNext(myIterator.next());
}

const wait = (secs) => {
    return new Promise((resolve, reject) => {
      if (secs > 4) return reject("Can't wait 4 secs!");
      setTimeout(resolve, secs * 1000);
    });
};

asyncfy(function* () {
  console.log('wait 1 sec');
  yield wait(1);

  console.log('wait 2 sec');
  yield wait(2);
});

const returnValuePromise = () => {
  return new Promise((resolve, reject) => resolve('value'));
};
asyncify(function* () {
  // return values dont work in our cool model :x
  console.log(yield returnValuePromise());
});

// what about an error?
const errorPromise = () => {
  return new Promise((resolve, reject) => reject(new Error('bum!')));
}
asyncify(function* () {
  // Well, with our functions errors are gone, unhandled promise rejections :x
  try {
    console.log(yield errorPromise());
  } catch (ex) {
    console.error(ex);
  }
});
