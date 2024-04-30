function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    var bmi = weight / (height * height);
    var bmiCategory = getBMICategory(bmi);
    var message = 'Your BMI is ' + bmi.toFixed(2) + ', which falls into the category: ' + bmiCategory + '.';
    document.getElementById('result').innerText = message;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  