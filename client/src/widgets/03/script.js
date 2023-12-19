export async function initializeScript() {
  const serverURL = process.env.SERVER;
  const response = await fetch(`${serverURL}/widget/ip-data/`);
  const data = await response.json();
  console.log(data);
}
