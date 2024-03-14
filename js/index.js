function reset_BMI(){}

function condition_func(BMI){
    BMI = parseFloat(BMI);

    if(BMI < 18.5){ //kekurangan berat badan
        //code
    }else if((BMI >= 18.5) && (BMI < 25.0)){ //berat badan normal
        //code
    }else if((BMI >= 25.0) && (BMI < 30.0)){ //kelebihan berat badan
        //code
    }else{ //obesitas
        //code
    }
    
    return;
}

function data_process(whats_gender, berat, umur, tinggi){

    let BMI = Number;

    berat = parseInt(berat);
    umur = parseInt(umur);
    tinggi = parseFloat(tinggi);

    alert(tinggi);
    tinggi = tinggi / 100;
    alert(tinggi);

    BMI = (berat / (tinggi * tinggi)).toFixed(2);
    alert(BMI);

    condition_func(BMI);

    return;
}

function data_submit(){

    let berat = Number;
    let umur = Number;
    let tinggi = Number;
    let gender;
    let whats_gender = String;
    
    berat = document.getElementById("weight").value;
    umur = document.getElementById("age").value;
    tinggi = document.getElementById("height").value;
    gender = document.getElementsByName("gender");

    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            if(i === 0){
                whats_gender = "male";
            }else if(i === 1){
                whats_gender = "female";
            }
        }
    }

    data_process(whats_gender, berat, umur, tinggi);

    return;
}