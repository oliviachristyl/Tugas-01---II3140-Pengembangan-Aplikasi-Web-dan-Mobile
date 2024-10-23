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
  }
  
  // Fungsi untuk memperbarui input berdasarkan slider
  function updateVoltageInput() {
    const voltageSlider = document.getElementById("voltage-slider");
    document.getElementById("voltage").value = voltageSlider.value;
  }
  
  function updateResistanceInput() {
    const resistanceSlider = document.getElementById("resistance-slider");
    document.getElementById("resistance").value = resistanceSlider.value;
  }
  
  // Fungsi untuk memperbarui slider berdasarkan input
  function updateVoltageSlider() {
    const voltageInput = document.getElementById("voltage");
    const voltageSlider = document.getElementById("voltage-slider");
    voltageSlider.value = voltageInput.value;
  }
  
  function updateResistanceSlider() {
    const resistanceInput = document.getElementById("resistance");
    const resistanceSlider = document.getElementById("resistance-slider");
    resistanceSlider.value = resistanceInput.value;
  }
  
  // Fungsi untuk reset slider jika input kosong
  function checkEmptyInput(inputId, sliderId, defaultValue) {
    const inputElement = document.getElementById(inputId);
    const sliderElement = document.getElementById(sliderId);
    if (inputElement.value === "") {
      inputElement.value = defaultValue;
      sliderElement.value = defaultValue;
    }
  }