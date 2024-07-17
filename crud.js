var selectedRow = null
var productList = []

function onFormSubmit() {
    if (validate() == true) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);}
        else {
            updateRecord(formData);
            resetForm();}
        productList = tableToString(document.getElementById("productList").getElementsByTagName('tbody')[0])
        stringToTable(productList)
    }
}

function tableToString(table) { 
    var data = [];
    for (let i = 0; i < table.rows.length; i++) { 
        var tableRow = table.rows[i];
        var rowData = [];
        for (let j = 0; j < tableRow.cells.length - 1; j++) { 
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    return data;
}

function stringToTable(data){
    var table = document.getElementById("buyingList").getElementsByTagName('tbody')[0];
    for (let i = 0; i < data.length; i++) {
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data[i][1];
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data[i][2];
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data[i][4];

        cell3 = newRow.insertCell(3);
        cell3.innerHTML = `<a onClick="onBuy(this)" id="UP"> Buy </a>`;
    }
}

function readFormData() {
    var formData = {};
    formData["idproduct"] = document.getElementById("idproduct").value;
    formData["nameproduct"] = document.getElementById("nameproduct").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idproduct;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nameproduct;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.quantity;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.price;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)" id="UP"> Edit </a><a onClick="onDelete(this)" id="UP"> Remove </a>`;
}

function resetForm(){
    document.getElementById("idproduct").value = "";
    document.getElementById("nameproduct").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idproduct").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nameproduct").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idproduct;
    selectedRow.cells[1].innerHTML = formData.nameproduct;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.quantity;
    selectedRow.cells[4].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm('Do you really want to remove this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = false;
    if (document.getElementById("nameproduct").value == "" ||
        document.getElementById("idproduct").value == "" ||
        document.getElementById("quantity").value == "" ||
        document.getElementById("price").value == "" ||
        document.getElementById("description").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}