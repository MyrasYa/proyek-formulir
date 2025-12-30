// ################################
// MANIPULATE FOR TANGGAL LAHIR
// ################################

const Kalender = document.getElementById('Kalender');
const Tanggal = document.getElementById('inputTanggal');
const Bulan = document.getElementById('inputBulan');
const Tahun = document.getElementById('inputTahun');

Kalender.addEventListener('change', function(e) {
    
    const output = this.value;
    try {
        if (output) {
            const  fullOutput = output.split('-');
            const tanggal = fullOutput[2];
            const bulan = fullOutput[1];
            const tahun = fullOutput[0];
            
            // console.log(fullOutput)
    
            Tanggal.value = tanggal;
            Tahun.value = tahun;
            Bulan.value = bulan;
            
            if (Tanggal.value.trim()) {
                Tanggal.style.border = '';
            }   
            if (Bulan.value.trim()) {   
                Bulan.style.border = '';    
            }
            if (Tahun.value.trim()) {   
                Tahun.style.border = '';    
            }
            
        }

    } catch (error) {
        console.error('Error parsing date:', error);
    }
    
});

// ################################
// MANIPULATE FOR TANGGAL LAHIR
// ################################







// ################################
// MANIPULATE FORM SUBMIT
// ################################

const form = document.getElementById('valid');
const btnOK = document.getElementById('submitBtn');
const validOK = document.getElementById('validOK');
const rule = document.getElementById('rule');
const policy = document.getElementById('policy');


rule.addEventListener('change', function() {
    if (this.checked) {
        this.style.outline = '';
    } else {
        this.style.outline = '1px solid red';
    }
});

policy.addEventListener('change', function() {
    if (this.checked) {
        this.style.outline = '';
    } else {
        this.style.outline = '1px solid red';
    }
});

const inputs = document.querySelectorAll(
    '#namaDepan, #namaBelakang, #email, #tel, #alamatJalan, #Kota, #Provinsi, #Pos, #inputTanggal, #inputBulan, #inputTahun'
);

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.border = '';
        }
    });
});

btnOK.addEventListener('click', function(e) {
    
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {  
            isValid = false;
            input.style.border = '1px solid red';
        }
    });

    if (!rule.checked) {
        rule.style.outline = '1px solid red';
        isValid = false;
    }

    if (!policy.checked) {
        policy.style.outline = '1px solid red';
        isValid = false;
    }

    if (!isValid) {
        form.innerHTML = '<h1>Formulir belum lengkap</h1><p>Silakan lengkapi semua bidang yang diperlukan dan setujui syarat & ketentuan serta kebijakan privasi.</p><button id="validOK">Ok</button>';
        
        form.classList.add('show');
        form.scrollIntoView({ 
            behavior: 'smooth', block: 'center' 
        });

        const validOK = document.getElementById('validOK');
        validOK.addEventListener('click', function(e) {
            form.classList.remove('show');
        });
    } else {
        form.innerHTML = '<h1>Formulir berhasil dikirim</h1><p>Selama anda telah berhasil mendaftar, perekrutan anda sedang di proses!</p><button id="validOK">Ok</button>';
        
        form.classList.add('show');
        form.scrollIntoView({ 
            behavior: 'smooth', block: 'center' 
        });

        const validOK = document.getElementById('validOK');
        validOK.addEventListener('click', function(e) {
            form.classList.remove('show');
        });
    }
});


// ################################
// MANIPULATE FORM SUBMIT
// ################################