document.getElementById("card-number-input").addEventListener("input", function () {
    document.getElementById("card-number-preview").textContent = "" + this.value;
  });
  
  function updateExpPreview() {
    const mm = document.getElementById("month").value;
    const yy = document.getElementById("year").value;
    const csv = document.getElementById("csv").value;
    document.getElementById("exp-preview").textContent = `${mm}/${yy} | CSV: ${csv}`;
  }
  
  ["month", "year", "csv"].forEach(id => {
    document.getElementById(id).addEventListener("input", updateExpPreview);
  });