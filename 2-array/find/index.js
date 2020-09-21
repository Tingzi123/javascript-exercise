export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(e => e.age <= 20 && e.age > 10).name;
}
