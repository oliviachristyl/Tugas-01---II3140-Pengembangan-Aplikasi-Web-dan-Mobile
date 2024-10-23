function openOhmLab() {
    document.querySelector(".topic-section").classList.add("hidden");
    document.getElementById("ohm-lab").classList.remove("hidden");
  }
  
  function comingSoon() {
    alert("Topik ini akan tersedia segera!");
  }
  
  function calculateCurrent() {
    const voltage = parseFloat(document.getElementById("voltage").value);
    const resistance = parseFloat(document.getElementById("resistance").value);
  
    if (isNaN(voltage) || isNaN(resistance) || resistance <= 0 || voltage <= 0) {
      alert("Masukkan nilai yang valid untuk voltase dan hambatan.");
      return;
    }
  
    // Hitung arus (I = V / R)
    const current = (voltage / resistance) * 1000; // dalam mA
    document.getElementById("current").textContent = current.toFixed(2);
  
    // Update grafik setelah arus dihitung
    updateCharts(voltage, resistance, current);
  }
  
  function updateCharts(voltage, resistance, current) {
    // Update grafik antara Arus dan Hambatan
    const resistanceRange = Array.from({ length: 10 }, (_, i) => 10 + i * 100); // Rentang hambatan dimulai dari 10Ω, bertambah 10
    charts.currentResistance.data.labels = resistanceRange;
    charts.currentResistance.data.datasets[0].data = resistanceRange.map(
      (r) => (voltage / r) * 1000 // Menghitung arus untuk tiap hambatan
    );
    charts.currentResistance.update();
  
    // Update grafik antara Voltase dan Arus
    const voltageRange = Array.from({ length: 10 }, (_, i) => 0 + i * 1000); // Menambahkan variasi voltase
    charts.voltCurrent.data.labels = voltageRange;
    charts.voltCurrent.data.datasets[0].data = voltageRange.map(
      (v) => (v / resistance) * 1000 // Menghitung arus berdasarkan voltase dan hambatan tetap
    );
    charts.voltCurrent.update();
  
    // Update grafik antara Voltase dan Hambatan
    charts.voltResistance.data.labels = voltageRange;
    charts.voltResistance.data.datasets[0].data = voltageRange.map(
      () => resistance // Hambatan tetap pada setiap titik voltase
    );
    charts.voltResistance.update();
  }

  // Fungsi untuk memperbarui input voltase saat slider diubah
function updateVoltageInput() {
    const sliderValue = document.getElementById("voltage-slider").value;
    document.getElementById("voltage").value = sliderValue;
    calculateCurrent();
  }
  
  // Fungsi untuk memperbarui slider voltase saat input manual diubah
  function updateVoltageSlider() {
    const inputValue = document.getElementById("voltage").value;
    document.getElementById("voltage-slider").value = inputValue;
  }
  
  // Fungsi untuk memperbarui input hambatan saat slider diubah
  function updateResistanceInput() {
    const sliderValue = document.getElementById("resistance-slider").value;
    document.getElementById("resistance").value = sliderValue;
    calculateCurrent();
  }
  
  // Fungsi untuk memperbarui slider hambatan saat input manual diubah
  function updateResistanceSlider() {
    const inputValue = document.getElementById("resistance").value;
    document.getElementById("resistance-slider").value = inputValue;
  }
  
  