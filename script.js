const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height<=0 || isNaN(height)){
        result.innerHTML=`${height} is Invalid height`
    }
    else if(weight === '' || weight<=0 || isNaN(weight)){
        result.innerHTML=`${weight} is Invalid weight`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(weight<18.6){
            result.innerHTML=` ${bmi} Under Weight`;
        }
        else if(weight>=18.6 || weight<=24.9){
            result.innerHTML=` ${bmi} Good Weight`;
        }
        else{
            result.innerHTML=` ${bmi} Over Weight`;
        }
    }
});