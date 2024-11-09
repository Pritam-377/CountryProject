function getcountry(country)
{
    let p1=fetch(`https://restcountries.com/v3.1/name/${country}`);
   let p2= p1.then(function(data){
        return data.json();
    });
    p2.then(function(country){
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
    })
}

getcountry('bharat');
getcountry('australia');
getcountry('rsa');
getcountry('')