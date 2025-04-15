const baseUrl = "https://spring2025-pages-demo.onrender.com/";
// const baseUrl = "http://localhost:3454";


export async function fetchData() {
  const response = await fetch(baseUrl + "/");
  const data = await response.text();
  console.log("got data", data);
  return data;
}
