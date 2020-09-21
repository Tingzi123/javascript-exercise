function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(e => e % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  let r = [];
  r = collection.filter(function(element, index, self) {
    return self.indexOf(element) === index;
  });
  return r;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
