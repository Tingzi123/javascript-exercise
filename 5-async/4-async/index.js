async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  // end -->
  const result = await fetch(url);
  const data = result.json();
  console.log(data);
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
