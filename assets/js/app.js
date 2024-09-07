////////////////////////////////////////////////////////////
// Application Variables
////////////////////////////////////////////////////////////
const currencyOneEl = document.getElementById('currency-one');
const currencyTwoEl = document.getElementById('currency-two');
const amountOneEl = document.getElementById('amount-one');
const amountTwoEl = document.getElementById('amount-one');
const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');
////////////////////////////////////////////////////////////
// Application Functions
////////////////////////////////////////////////////////////
const calculate = () => {
    const currency_one = currencyOneEl.value;
    const currency_two = currencyTwoEl.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
        });
}
////////////////////////////////////////////////////////////
// Application Event Listeners
////////////////////////////////////////////////////////////
currencyOneEl.addEventListener('change', calculate);
amountOneEl.addEventListener('input', calculate);
currencyTwoEl.addEventListener('change', calculate);
amountTwoEl.addEventListener('input', calculate);
swapEl.addEventListener('click', () => {
    [currencyOneEl.value, currencyTwoEl.value] = [
        currencyTwoEl.value,
        currencyOneEl.value
    ];
    calculate();
});
////////////////////////////////////////////////////////////
// Application Init Call Functions
////////////////////////////////////////////////////////////
calculate();