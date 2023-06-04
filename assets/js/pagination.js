document.addEventListener("DOMContentLoaded", function () {
  var currentPage = 1;
  var rowsPerPage = 5;
  var table = document.getElementById("orders");
  var tableBody = document.getElementById("tableBody");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var pageButtons = document.getElementById("pageButtons");
  var rows;

  function generateTable() {
    var start = (currentPage - 1) * rowsPerPage;
    var end = start + rowsPerPage;
    var paginatedRows = rows.slice(start, end);

    tableBody.innerHTML = "";
    paginatedRows.forEach(function (row) {
      tableBody.appendChild(row.cloneNode(true));
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(rows.length / rowsPerPage);

    generatePageButtons();
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      generateTable();
    }
  }

  function goToNextPage() {
    if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
      currentPage++;
      generateTable();
    }
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    generateTable();
  }

  function createPageButton(pageNumber) {
    var button = document.createElement("button");
    button.textContent = pageNumber;
    button.classList.add("pageButton");
    if (pageNumber === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", function () {
      goToPage(pageNumber);
    });
    return button;
  }

  function generatePageButtons() {
    pageButtons.innerHTML = "";

    var totalPages = Math.ceil(rows.length / rowsPerPage);
    for (var i = 1; i <= totalPages; i++) {
      var button = createPageButton(i);
      pageButtons.appendChild(button);
    }
  }

  prevBtn.addEventListener("click", goToPrevPage);
  nextBtn.addEventListener("click", goToNextPage);

  // Get all rows except the header
  rows = Array.from(table.getElementsByTagName("tr")).slice(1);

  generateTable();
});
