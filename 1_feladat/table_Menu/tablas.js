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

    formData["salary"] = document.getElementById("salary").value;  

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

    cell3.innerHTML = data.salary;  

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

    document.getElementById("salary").value = "";  

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

    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;  

    document.getElementById("city").value = selectedRow.cells[3].innerHTML;  

}  

// A kiolvasott űrlap adatokkal módosítja a kiválasztott rekordot:  

//        Update-nél hívjuk meg  

function updateRecord(formData) {  

    selectedRow.cells[0].innerHTML = formData.fullName;  

    selectedRow.cells[1].innerHTML = formData.email;  

    selectedRow.cells[2].innerHTML = formData.salary;  

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