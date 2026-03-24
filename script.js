function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");

    // Top pe new row add karo (index 0)
    let newRow = table.insertRow(0);

    // 2 cells create karo
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Text set karo
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
}
