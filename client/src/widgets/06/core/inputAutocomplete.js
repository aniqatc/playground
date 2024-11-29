import lotteryContext from "./context";
const { numberInputs } = lotteryContext;

export default function initializeInputsAutocomplete() {
    numberInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            input.classList.remove("error");
            
            if (input.value.length > 2) {
                input.value = input.value.slice(0, 2);
            }
            if (input.value.length === input.maxLength && index < numberInputs.length - 1) {
                numberInputs[index + 1].focus();
            }
        });

        input.addEventListener("keyup", event => {
            if (event.key === "Backspace" && input.value.length === 0 && index > 0) {
                numberInputs[index - 1].focus();
            }
        })
    })
}