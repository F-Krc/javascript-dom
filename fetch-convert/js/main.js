// Write your code here
const convertForm = document.getElementById("conversion-form");
const convertFromSelect = document.getElementById("convert-from");
const convertToSelect = document.getElementById("convert-to");
const convertCountInput = document.getElementById("convert-count");
const outputArea = document.getElementById("output");


convertForm.addEventListener("submit", async (e) => {

  e.preventDefault();
  
  const convertFrom = convertFromSelect.value;
  const convertTo = convertToSelect.value;
  const convertCount = parseFloat(convertCountInput.value);

  if (!convertFrom || !convertTo || isNaN(convertCount)) {
    outputArea.value = "Please fill in all fields.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.coinbase.com/v2/prices/${convertFrom.toUpperCase()}-${convertTo.toUpperCase()}/spot`
    );
    const data = await response.json();
    console.log(data)
    const spotPrice = parseFloat(data.data.amount);
    if (isNaN(spotPrice)) {
      outputArea.value = "Error fetching conversion rate.";
    } else {
      const convertedAmount = convertCount * spotPrice;
      outputArea.value = `${convertCount} ${convertFrom.toUpperCase()} = ${convertedAmount} ${convertTo.toUpperCase()}`;
    }
  } catch (error) {
    outputArea.value = "Error fetching conversion rate.";
  }
});
