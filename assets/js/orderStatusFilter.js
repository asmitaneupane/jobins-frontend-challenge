document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("statusFilter").addEventListener("change", filterTable);

  function filterTable() {
    var statusFilterValue = document.getElementById("statusFilter").value;
    var rows = document.getElementById("tableBody").getElementsByTagName("tr");

    var visibleRowCount = 0; // Track the number of visible rows

    for (var i = 0; i < rows.length; i++) {
      var statusCell = rows[i].getElementsByTagName("td")[5]; // Assuming status cell is at index 5

      if (statusCell) {
        var status = statusCell.textContent.trim();

        var isStatusVisible = false;

        if (statusFilterValue === "All" || status === statusFilterValue) {
          isStatusVisible = true;
        }

        var isVisible = isStatusVisible;

        if (isVisible) {
          rows[i].style.display = "";
          visibleRowCount++;
        } else {
          rows[i].style.display = "none";
        }

        console.log("Row", i + 1, "Status:", status, "Visible:", isVisible);
      }
    }

    console.log("Visible row count:", visibleRowCount);
    if (visibleRowCount === 0) {
      console.log("No rows match the selected filters.");
    }
  }

});
