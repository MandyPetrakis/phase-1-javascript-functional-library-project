function myEach(collection, cb) {
  let myArray = collection;

  if (typeof collection === "object") {
    myArray = Object.values(collection);
  }

  myArray.forEach((item) => cb(item));

  return collection;
}

function myMap(collection, cb) {
  if (typeof collection === "object") {
    collection = Object.values(collection);
  }
  return collection.map((item) => cb(item));
}

function myReduce(collection, cb, acc = -2) {
  if (typeof collection === "object") {
    collection = Object.values(collection);
  }
  return collection.reduce(cb, acc);
}

function myFind(collection, predicate) {
  if (typeof collection === "object") {
    collection = Object.values(collection);
  }
  return collection.find(predicate);
}

function myFilter(collection, predicate) {
  if (typeof collection === "object") {
    collection = Object.values(collection);
  }
  let array = collection.filter(predicate);
  return array;
}

function mySize(collection) {
  if (typeof collection === "object") {
    collection = Object.values(collection);
  }
  return collection.length;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n);
  }
}
