

let heightInput = document.querySelector("#heightInput");

let weightInput = document.querySelector("#weight");

let calculate = document.querySelector(".calculate")



let h = heightInput.Value;


calculate.addEventListener('click', () => {
    // let bmi = weight.value / (height.value/100)
        let meter = heightInput.valueAsNumber/100;
        console.log(meter);
        
        let bmi = weightInput.valueAsNumber/(meter*meter);
        bmi = Math.trunc(bmi*100)/100;

        document.querySelector('.bmi').textContent = `Your BMI is : ${bmi}`
        let helthStatus = document.querySelector('.healthStatus');
        if(bmi<18.5) {
            helthStatus.textContent = `You are Underweight`
            helthStatus.style.color = "Yellow"
        }
        else if (bmi>= 18.5 && bmi <=25) {
            helthStatus.textContent = `You are Healthy`
            helthStatus.style.color = "Green"
        }
        else {
            helthStatus.textContent = `You are Overweight`
            helthStatus.style.color = "Red"
        }
})
