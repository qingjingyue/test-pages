export async function hello() {
  return fetch("https://qifu.baidu.com/api/v1/ip-portrait/brief-info/local")
    .then((res) => res.text())
}