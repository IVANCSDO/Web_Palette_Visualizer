const colorPickerToggle = document.getElementById("color-picker-toggle");
const colorPicker = document.getElementById("color-picker");
const bgColorInput = document.getElementById("bg-color");
const fontColorInput = document.getElementById("font-color");
const primaryColorInput = document.getElementById("primary-color");
const secondaryColorInput = document.getElementById("secondary-color");
const colorSubmit = document.getElementById("color-submit");
const colorCancel = document.getElementById("color-cancel"); // Agregamos el botón "Cancelar"

colorPickerToggle.addEventListener("click", () => {
    colorPicker.style.display = "block";
});

colorSubmit.addEventListener("click", () => {
    const selectedBackgroundColor = bgColorInput.value;
    const selectedFontColor = fontColorInput.value;
    const selectedPrimaryColor = primaryColorInput.value;
    const selectedSecondaryColor = secondaryColorInput.value;

    document.body.style.backgroundColor = selectedBackgroundColor;
    document.body.style.color = selectedFontColor;
    // Si tienes elementos específicos que deseas aplicar los colores primario y secundario, agrégales estilos aquí.

    colorPicker.style.display = "none";
});

colorCancel.addEventListener("click", () => {
    colorPicker.style.display = "none"; // Cierra la ventana de selección de color sin aplicar cambios
});
