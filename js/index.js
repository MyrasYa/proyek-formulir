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
            Bulan.value = bulan;
            Tahun.value = tahun;
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
const btnOK = document.getElementById('submitBtn')
const validOK = document.getElementById('validOK');

btnOK.addEventListener('click', function(e) {
    e.preventDefault();
    
    const inputs = document.querySelectorAll(
        '#namaDepan, #namaBelakang, #email, #tel, #alamatJalan, #Kota, #Provinsi, #Pos, #inputTanggal, #inputBulan, #inputTahun'
    );
    const rule = document.getElementById('rule');
    const policy = document.getElementById('policy');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.border = '2px solid red';
        }
    })

    if (!rule.checked || !policy.checked) {
        isValid = false;
        rule.style.outline = '2px solid red';
        policy.style.outline = '2px solid red';
    }

    if (!isValid) {
        form.innerHTML = 
        '<h1>Formulir belum lengkap</h1><p>Silakan lengkapi semua bidang yang diperlukan dan setujui syarat & ketentuan serta kebijakan privasi.</p><button id="validOK">Ok</button>';
        
        const validOK = document.getElementById('validOK'); 
        validOK.addEventListener('click', function(e) {
            form.style.display = 'none';
            form.style.opacity = '0';
            form.style.pointerEvents = 'none';
            form.style.transition = 'all 0.3s ease-in-out';
        });
    }

    console.log('ok clicked');
    form.style.display = 'flex';
    form.style.opacity = '1';
    form.style.pointerEvents = 'auto';
    form.style.transition = 'all 0.3s ease-in-out';
    form.scrollIntoView({ 
        behavior: 'smooth', block: 'center' 
    });
    
});

validOK.addEventListener('click', function(e) {
    form.style.display = 'none';
    form.style.opacity = '0';
    form.style.pointerEvents = 'none';
    form.style.transition = 'all 0.3s ease-in-out';
});


// ################################
// MANIPULATE FORM SUBMIT
// ################################