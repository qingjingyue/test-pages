export async function hello(): Promise<string> {
  return fetch(`http://8.130.108.146:8080/hello`, {
    method: "GET",
  })
    .then((res) => res.text())
}