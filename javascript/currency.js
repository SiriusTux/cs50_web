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
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }

});
