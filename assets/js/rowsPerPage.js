document.addEventListener("DOMContentLoaded", function () {

function updateTable() {
  var selectedValue = parseInt(document.getElementById('dataPerPage').value);
  var tableRows = document.getElementById('orders').getElementsByTagName('tr');

  for (var i = 0; i < tableRows.length; i++) {
    if (i < selectedValue) {
      tableRows[i].style.display = '';
    } else {
      tableRows[i].style.display = 'none';
    }
  }
}

updateTable();

});