// countries name ,region ,sub region and population


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',);
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.region,element.subregion,element.population);
   })}
   