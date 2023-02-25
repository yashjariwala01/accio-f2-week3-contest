let newRowButton = document.querySelector("#btn");
let tableBody = document.querySelector("#body");
let tableData=[];

function saveData(name, roll,subject,marks,markedby){
    
    newRowButton.disbaled=false;

    if(name=="" || roll =="" ||subject=="" ||marks=="" || markedBy==""){
        alert("incomplete details");
    }
    else if (markedby.includes("@") == false) {
        alert("Please Enter valid Email");
    }
    else{
        
    let data ={
            id:tableData.length+1,
            student_name: name, 
            Student_roll: roll,
            subject: subject,
            marks :marks,
            markedBy: markedby}  
    
    console.log("New Row: ", data);
    tableData.push(data)
    console.log("tableData",tableData);
    tablebody.innerHTML = tableData.map((item) => {
                    return (` <tr> <td>${item.id}</td>
                    <td>${item.student_name}</td>
                    <td>${item.student_roll}</td>
                    <td>${item.subject}</td>
                    <td>${item.marks}</td>
                    <td>${item.markedBy}</td></tr>`)
                }).join("")

    }

}

    

newRowButton.addEventListener("click",()=>{
    
    tableBody.innerHTML= tableBody.innerHTML + 
    `<td>${tableData.length+1}</td>
    <form>
    <td><input id="studName" type="text"></td>
    <td><input id="roll" type="text"></td>
    <td><input id="subject" type="text"></td>
    <td><input id="marks" type="number"></td>
    <td><input id="email" type="email"></td>
    <td><button class="savebtn" onclick="saveData(document.getElementById('studName').value,document.getElementById('roll').value,document.getElementById('subject').value,document.getElementById('marks').value,document.getElementById('email').value)">Save</button></td>
    </form>`

    newRowButton.disbaled=true

})
