function calculate(formNumber) {
    const numInput = document.getElementById('num' + formNumber);
    const textInput = document.getElementById('text' + formNumber);
    const num = parseInt(numInput.value);
    const text = textInput.value;

    if (isNaN(num)) {
        alert("This field is required. uWu");
        return;
    }

    let result = '';

   
    if (formNumber === 1) {
        result += '<b>For Loop Result:</b><br>';
        for (let i = 1; i <= num; i++) {
            result += text + '<br>';
        }
    }

    
    if (formNumber === 2) {
        result += '<b>While Loop Result:</b><br>';
        let i = 1;
        while (i <= num) {
            result += text + '<br>';
            i++;
        }
    }

    
    if (formNumber === 3) {
        result += '<b>Do-While Loop Result:</b><br>';
        let i = 1;
        do {
            result += text + '<br>';
            i++;
        } while (i <= num);
    }

   
    document.getElementById('output' + formNumber).innerHTML = result;
}

function clearFields(formNumber) {
    const numInput = document.getElementById('num' + formNumber);
    const textInput = document.getElementById('text' + formNumber);
    numInput.value = '';
    textInput.value = '';
    document.getElementById('output' + formNumber).innerHTML = '';
}
