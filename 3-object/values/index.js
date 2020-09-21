export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sumOfSource = 0;
  for (const val of Object.values(source)) {
    sumOfSource += Number(val);
  }

  return sumOfSource;
}
