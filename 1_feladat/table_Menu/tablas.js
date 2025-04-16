var selectedRow = null  

function onFormSubmit() {  

    if (validate()) 
    {  
      var formData = readFormData();

      if (selectedRow == null)  
        insertNewRecord(formData);
      else  
        updateRecord(formData);
      resetForm();  
    }
}  

function readFormData() {  

    var formData = {};  

    formData["fullName"] = document.getElementById("fullName").value;  
    formData["email"] = document.getElementById("email").value;  
    formData["irsz"] = document.getElementById("irsz").value;  
    formData["city"] = document.getElementById("city").value;  

    return formData;  

}  

function insertNewRecord(data) {  

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);  
    cell1.innerHTML = data.fullName;  

    cell2 = newRow.insertCell(1);  
    cell2.innerHTML = data.email;  

    cell3 = newRow.insertCell(2);  
    cell3.innerHTML = data.irsz;  

    cell4 = newRow.insertCell(3);  
    cell4.innerHTML = data.city;  
    
    cell5 = newRow.insertCell(4);  
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}  

function resetForm() {  

    document.getElementById("fullName").value = "";  
    document.getElementById("email").value = "";  
    document.getElementById("irsz").value = "";  
    document.getElementById("city").value = "";  

    selectedRow = null;
}

function onEdit(td) {  

    selectedRow = td.parentElement.parentElement;  

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;  
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;  
    document.getElementById("irsz").value = selectedRow.cells[2].innerHTML;  
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;  
}  

function updateRecord(formData) {  

    selectedRow.cells[0].innerHTML = formData.fullName;  
    selectedRow.cells[1].innerHTML = formData.email;  
    selectedRow.cells[2].innerHTML = formData.irsz;  
    selectedRow.cells[3].innerHTML = formData.city;  

}  

function onDelete(td) {  

  if (confirm('Are you sure to delete this record ?')) {  
    row = td.parentElement.parentElement;  
    document.getElementById("employeeList").deleteRow(row.rowIndex);  
    resetForm();  
  }

}  

function validate() {  

    isValid = true;  

    if (document.getElementById("fullName").value == "") {  
      isValid = false;  
      document.getElementById("fullNameValidationError").classList.remove("hide");  
    } 
    else {  
      isValid = true;  
      if (!document.getElementById("fullNameValidationError").classList.contains("hide"))  
        document.getElementById("fullNameValidationError").classList.add("hide");  
    }  

    return isValid;  
} 

function sortTable(n) {

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("employeeList");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

function searchData() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBoxId");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeList");
    tr = table.getElementsByTagName("tr");
    
    for (j = 0; j < 4; j++)
    {
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[j];
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
}