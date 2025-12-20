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
            
            console.log(fullOutput)
    
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