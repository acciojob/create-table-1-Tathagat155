function insert_Row() {
    //Write your code here
  let table=document.getElementById("sampleTable");
	let row=table.insertRow(0);
	let c1=row.insertCell(0);
	let c2=row.insertCell(1);
	c1.innerText="New Cell1";
	c2.innerText="New Cell2"
}

