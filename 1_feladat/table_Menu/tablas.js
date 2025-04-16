var selectedRow = null  

// Ha kitölti az űrlapot és a Submit gombra kattint:  

function onFormSubmit()  {  

// validate(): ellenőrzi az űrlap helyes kitöltését  

    if (validate()) {  

// Kiolvassa a beviteli mezők adatait és visszaadja azokat a formData listában.  

        var formData = readFormData();  

// Ha selectedRow == null: a gombra kattintás után beszúrja az új rekordot  

//       különben módosíja a kiválasztott rekordot.  

//        selectedRow alapesetben null, Update-nél kap majd értéket  

        if (selectedRow == null)  

            insertNewRecord(formData);  

        else  

            updateRecord(formData);  

// Kiüríti az űrlap adatait:  

        resetForm();  

     }  

}  

// Kiolvassa a beviteli mezők adatait és visszaadja azokat egy listában.   

function readFormData() {  

    var formData = {};  

    formData["fullName"] = document.getElementById("fullName").value;  

    formData["email"] = document.getElementById("email").value;  

    formData["irsz"] = document.getElementById("irsz").value;  

    formData["city"] = document.getElementById("city").value;  

    return formData;  

}  

// Beszúrja az új sort a táblázat végére, és a sor végére tesz két linket: Edit, Delete  

//        data: az űrlap adatai egy listában  

function insertNewRecord(data) {  

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];  

// Beszúr egy új sort a táblázat végére:  

    var newRow = table.insertRow(table.length);  

// Beszúr egy üres cellát az új sorba:  

    cell1 = newRow.insertCell(0);  

// A cellába beteszi a fullName adatot az űrlapról  

    cell1.innerHTML = data.fullName;  

    cell2 = newRow.insertCell(1);  

    cell2.innerHTML = data.email;  

    cell3 = newRow.insertCell(2);  

    cell3.innerHTML = data.irsz;  

    cell4 = newRow.insertCell(3);  

    cell4.innerHTML = data.city;  

    cell4 = newRow.insertCell(4);  

// a sor végére tesz két linket: Edit, Delete  

//       this: a linket jelöli, amire rákattintottak  

    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>  

                       <a onClick="onDelete(this)">Delete</a>`;  

}  

// Kiüríti a beviteli mezőket. pl. az adatok elküldése után hívja meg.  

function resetForm() {  

    document.getElementById("fullName").value = "";  

    document.getElementById("email").value = "";  

    document.getElementById("irsz").value = "";  

    document.getElementById("city").value = "";  

    selectedRow = null;  

}  

// A kiválasztott sor adatait visszatölti a beviteli mezőkbe.   

//        Segíti az Update-et az eredeti értékek visszatöltése  

//       td: a linket jelöli, amire rákattintottak. Lásd: insertNewRecord  

function onEdit(td) {  

// td.parentElement.parentElement : a kijelölt sor, mert a cell4 a link(td) szülője   

//        és a newRow a cell4 szülője. Lásd: insertNewRecord  

    selectedRow = td.parentElement.parentElement;  

// Az űrlapba betölti a kiválasztott sor adatait:  

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;  

    document.getElementById("email").value = selectedRow.cells[1].innerHTML;  

    document.getElementById("irsz").value = selectedRow.cells[2].innerHTML;  

    document.getElementById("city").value = selectedRow.cells[3].innerHTML;  

}  

// A kiolvasott űrlap adatokkal módosítja a kiválasztott rekordot:  

//        Update-nél hívjuk meg  

function updateRecord(formData) {  

    selectedRow.cells[0].innerHTML = formData.fullName;  

    selectedRow.cells[1].innerHTML = formData.email;  

    selectedRow.cells[2].innerHTML = formData.irsz;  

    selectedRow.cells[3].innerHTML = formData.city;  

}  

function onDelete(td) {  

// Megerősítés után törli a kiválasztott sort:  

    if (confirm('Are you sure to delete this record ?')) {  

// mint az onEdit-nél:  td.parentElement.parentElement: a kijelölt sor  

        row = td.parentElement.parentElement;  

// A táblázatból kitörli az adott indexű sort  

        document.getElementById("employeeList").deleteRow(row.rowIndex);  

        resetForm();  

     }  

}  

// validáció: A Full Name mező kitöltése kötelező.  

function validate() {  

    isValid = true;  

// Ha üres a Full Name mező (validációs hiba):  

    if (document.getElementById("fullName").value == "") {  

        isValid = false;  

// Megjeleníti az elrejtett hibaüzenetet:  

        document.getElementById("fullNameValidationError").classList.remove("hide");  

     } else {  

// ha nincs validációs hiba (ki van töltve a Full Name mező)  

        isValid = true;  

// Ha nincs elrejtve a validációs hibaüzenet, akkor elrejti azt:  

        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))  

            document.getElementById("fullNameValidationError").classList.add("hide");  

     }  

    return isValid;  

} 

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("employeeList");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }