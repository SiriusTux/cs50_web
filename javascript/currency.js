document.addEventListener('DOMContentLoaded', () => {

    var myHeaders = new Headers();
    myHeaders.append("apikey", "60ladqT07uYc49Gg3RzqG5jYRsXGwe0r");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    document.querySelector('form').onsubmit = function() {

        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=&base=EUR", requestOptions)
        .then(response => response.json())
        .then(data => {
            const number = parseFloat(document.querySelector('#number').value);
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined) {
                const result = number * rate
                document.querySelector('#result').innerHTML = `At curent rate ${number} EUR is equal to ${result.toFixed(3)} ${currency}.`;
            } else {
                document.querySelector('#result').innerHTML = `${currency} is not a valid currency.`;
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

});
