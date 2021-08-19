var selectedRow = null
var arr=[];
var cou=0;
function funct(){
    document.getElementById("ID").stepUp(++cou);
    document.getElementById("auto").disabled=true;

}

function onFormSubmit() {
    var g=document.forms["myform"]["ID"].value;
    if (g=="") {
        alert("id cnnot be empty");
        return false;
    }
        document.getElementById("auto").disabled=false;

    var formData = readFormData();
    if(sam(formData.ID)){
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();

}else{
    alert("ID is already in the array")
}

}

function sam(sum){
//console.log(arr.length);
var count=0;
for (var i = 0; i < arr.length; i++) {
    if (sum==arr[i]) {
    }else{
      count ++;
    }
}
   

if(count==arr.length){
 arr.push(sum);
  return true;
}else{
  return false;
}
}


function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").files[0];
    formData["ID"] = document.getElementById("ID").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["price"] = document.getElementById("price").value;
    return formData;

}
function insertNewRecord(data) {
    var table = document.getElementById("product").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    var e=URL.createObjectURL(data.Name);
    $(cell1).prepend($('<img>',{src:e,style:'width:100px'}));
    //$(cell1).css({});
   // cell1.innerHTML=data.Name;
  //  var s=data.Name;
 //   console.log(s);
  //  console.log(s.webkitRelativePath);
  //  const nam="<img scr=''alt='help'>"; 
  //  cell1.innerHTML=nam;
  //  cell1.setel
  
  //                    cell1.innerHTML="<img scr="+URL.createObjectURL(data.Name)+" alt='hello' />";
      //  blah.src = URL.createObjectURL(file)

//    cell1=document.createElement('img');
 //   cell1.scr=data.Name;
  // cell1.appendChild(img);
  //   cell1.appendchild('<img scr="'+data.Name+'" >');
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ID;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    
    selectedRow = td.parentElement.parentElement;
 //   document.getElementById("Name").files = selectedRow.cells[0].innerHTML;
    document.getElementById("ID").value = selectedRow.cells[1].innerHTML;
    var sky=selectedRow.cells[1].innerHTML;
    var index=arr.indexOf(sky);
    if(index>-1){
    arr.splice(index,1);
    }
    document.getElementById("Description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
            document.getElementById("auto").disabled=true;

}


function updateRecord(formData) {
    
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.ID;
    selectedRow.cells[2].innerHTML = formData.Description;
    selectedRow.cells[3].innerHTML = formData.price;

}

function onDelete(td) {

    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        console.log(row);
        document.getElementById("product").deleteRow(row.rowIndex);
        resetForm();
    }
}