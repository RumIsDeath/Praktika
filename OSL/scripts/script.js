function redirectToPage(selectElement) {
    var selectedValue = selectElement.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }

function redirectToApplicationForm() {
    window.location.href = "form.html";
}