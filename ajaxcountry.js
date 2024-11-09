function makeajaxcall(country) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://restcountries.com/v3.1/name/${country}`, true)
    xhr.send();
    return xhr;
}


function getdata(country) {



    let eachcountry = ``;
    country.forEach(function (item) {

        eachcountry += `<div class="col-4">
             <div class="card">
                    <div class="card-header">
                    <img src="${item.flags.png}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-center">
                    <h3>${item.name.common}</h3>
                    <h5>${item.capital[0]}</h5>
                    <h3>${(item.population / 1000000).toFixed(2)} M People</h3>
                    <h4>${item.region}</h4>
                </div>
                </div>
                </div>
                `;

    });
    document.getElementById('display').insertAdjacentHTML('beforeend', eachcountry);

}

function getcountries() {
    let req_1 = makeajaxcall('bharat');
    req_1.addEventListener('load', function () {
        let data = JSON.parse(req_1.responseText);
        getdata(data);
        let req_2 = makeajaxcall('australia');
        req_2.addEventListener('load', function () {
            let data = JSON.parse(req_2.responseText);
            getdata(data);
            let req_3 = makeajaxcall('uk');
            req_3.addEventListener('load', function () {
                let data = JSON.parse(req_3.responseText);
                getdata(data);
            }, )

        }, )


    }, )



}
getcountries();