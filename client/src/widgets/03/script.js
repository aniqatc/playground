export async function initializeScript() {
  const serverURL = process.env.SERVER;
  const response = await fetch(`${serverURL}/widget/user-data/`);
  const data = await response.json();
  console.log(data);

  const image = await fetch(`${serverURL}/widget/user-map/dark`);
  const imageBlob = await image.blob();
  const imageURL = await URL.createObjectURL(imageBlob);
  console.log(imageURL);
  const mapEl = document.querySelector("#widget-03 .map-img");
  mapEl.src = imageURL;
}
