export async function initializeScript() {
  const serverURL = process.env.SERVER;
  const response = await fetch(`${serverURL}/widget/user-data/`);
  const data = await response.json();
  console.log(data);

  const image = await fetch(`${serverURL}/widget/user-map/dark`);
  const imageUrl = await image.json();
  console.log(imageUrl);
}
