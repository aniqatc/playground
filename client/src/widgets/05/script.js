export async function initializeScript() {
    const response = await fetch(`${process.env.SERVER}/widget/markets/active`);
    const json = await response.json();
    console.log(json);
}
