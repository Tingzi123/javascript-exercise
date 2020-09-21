// TODO 17: 在这里写实现代码
import Person from './person';
// TODO 11: 在这里写实现代码
export default class Worker extends Person {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `${super.introduce()} I am a Worker. I have a job.`;
  }
}
