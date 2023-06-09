//search table by customer name
function searchOrder() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("orders");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

window.onload = function() {
  // Clear the input field
  document.getElementById("inputSearch").value = "";

  // Show all rows in the table
  var table = document.getElementById("orders");
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
};