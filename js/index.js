function reset_BMI(){
    location.reload();
    return;
}

function condition_func(BMI, event){

    event.preventDefault();
    BMI = parseFloat(BMI);
    var change_1 = document.getElementById("change_1");
    var change_2 = document.getElementById("change_2");
    var change_3 = document.getElementById("change_3");
    var change_4 = document.getElementById("change_4");
    var change_5 = document.getElementById("change_5");
    var change_6 = document.getElementById("change_6");
    var change_7 = document.getElementById("change_7");
    var change_8 = document.getElementById("change_8");
    var change_9 = document.getElementById("change_9");
    var change_10 = document.getElementById("change_10");
    var change_11 = document.getElementById("change_11");
    var change_12 = document.getElementById("change_12");
    
    if(BMI < 18.5){ //kekurangan berat badan

        change_1.textContent = "Kekurangan berat badan";
        change_2.textContent = BMI;
        change_3.textContent = "Berat badan anda dibawah batas normal";
        change_4.textContent = "0";
        change_5.textContent = "18.5";
        change_6.textContent = "Anda dalam kategori kekurangan berat badan, Untuk mengatasi kekurangan berat badan, pertimbangkan untuk meningkatkan asupan kalori dengan mengonsumsi makanan bergizi tinggi seperti buah-buahan, sayuran, protein sehat, dan sumber karbohidrat yang baik. Selain itu, tambahkan makanan berkalori tinggi ke dalam diet Anda, seperti kacang-kacangan, alpukat, dan minyak zaitun, serta pilih camilan sehat untuk meningkatkan asupan kalori tanpa mengorbankan kesehatan. Lakukan juga latihan resistensi atau angkat beban untuk membangun massa otot, hindari minum sebelum makan, pastikan Anda mendapatkan istirahat yang cukup, dan konsultasikan dengan ahli gizi atau dokter jika diperlukan. Penting juga untuk memperhatikan kesehatan mental dan mengelola stres atau kecemasan yang mungkin mempengaruhi nafsu makan Anda. Jika Anda mengalami perubahan berat badan yang signifikan atau gejala lain yang mengkhawatirkan, segera berkonsultasi dengan profesional medis.";
        change_7.textContent = "Jika BMI berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal.";
        change_8.textContent = "Beberapa efek yang berasal dari kekurangan berat badan";
        change_9.textContent = "Mudah lelah";
        change_10.textContent = "Imun tubuh menurun";
        change_11.textContent = "Tulang rapuh";
        change_12.textContent = "Penurunan massa otot";

    }else if((BMI >= 18.5) && (BMI < 25.0)){ //berat badan normal

        change_1.textContent = "Berat badan normal";
        change_2.textContent = BMI;
        change_3.textContent = "Berat badan anda dalam kondisi normal";
        change_4.textContent = "18.5";
        change_5.textContent = "25";
        change_6.textContent = "Anda dalam kategori berat badan ideal, menjaga berat badan merupakan salah satu kunci utama untuk memelihara kesehatan yang optimal. Melalui gaya hidup yang seimbang, kita dapat menghindari risiko berbagai penyakit kronis seperti obesitas, diabetes, dan penyakit jantung. Oleh karena itu, sangat penting untuk memperhatikan pola makan dengan baik.";

    }else if((BMI >= 25.0) && (BMI < 30.0)){ //kelebihan berat badan

        change_1.textContent = "Berat badan lebih";
        change_2.textContent = BMI;
        change_3.textContent = "Anda memiliki berat badan berlebih";
        change_4.textContent = "25";
        change_5.textContent = "30";
        change_6.textContent = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
        change_7.textContent = "Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        change_8.textContent = "Beberapa penyakit yang berasal dari kegemukan";
        change_9.textContent = "Diabetes";
        change_10.textContent = "Hipertensi";
        change_11.textContent = "Sakit jantung";
        change_12.textContent = "Osteoarthritis";

    }else{ //obesitas
        
        change_1.textContent = "Obesitas";
        change_2.textContent = BMI;
        change_3.textContent = "Anda memiliki berat badan yang berlebihan";
        change_4.textContent = "30";
        change_5.textContent = "100";
        change_6.textContent = "Anda berada dalam kategori obesitas atau berat badan terlalu berlebih. Untuk mengatasi obesitas, langkah-langkah utama meliputi adopsi pola makan sehat dengan fokus pada makanan bergizi, pengurangan porsi, dan kontrol kalori; meningkatkan aktivitas fisik dengan latihan aerobik teratur dan latihan kekuatan; mengelola stres dan meningkatkan kualitas tidur; serta memperhatikan gaya hidup sedentaris. Konsultasikan dengan profesional kesehatan untuk merancang program penurunan berat badan yang sesuai, dan anggap penurunan berat badan sebagai perubahan gaya hidup jangka panjang, bukan hanya sebagai diet sementara. Dengan komitmen dan kesabaran, pengendalian obesitas dapat dicapai, meningkatkan kesehatan secara keseluruhan.";
        change_7.textContent = "Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk sesegera mungkin menurunkan berat badan hingga batas normal.";
        change_8.textContent = "Beberapa penyakit yang berasal dari obesitas";
        change_9.textContent = "Diabetes";
        change_10.textContent = "Hipertensi";
        change_11.textContent = "Gagal jantung";
        change_12.textContent = "Osteoarthritis";

    }

    return;
}

function data_process(whats_gender, berat, umur, tinggi, event){

    event.preventDefault();
    let BMI = Number;

    berat = parseInt(berat);
    umur = parseInt(umur);
    tinggi = parseFloat(tinggi);

    tinggi = tinggi / 100;

    BMI = (berat / (tinggi * tinggi)).toFixed(2);

    condition_func(BMI, event);
    console.log(whats_gender);

    return;
}

function data_submit(event){

    event.preventDefault();

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

    data_process(whats_gender, berat, umur, tinggi, event);

    return;
}