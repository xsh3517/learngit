var myTable = document.creadteElement("table");
for(var i=1;i<=9;i++){
    var tr = document.createElement("tr");
    for(var j=1;j<=i;j++){
        var td = document.createElement("td")
        td.innerHTML = i + "X" + j + "=" + (i*j);
        tr.appendchild(td);
    }
    myTable.appendchild(tr);
}
document.body.appendchild(myTable);
