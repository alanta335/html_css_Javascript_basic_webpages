var Student = {
    "Name": {
        "Name1":"x",
    "Name2":"y",
    "Name3":"z"
},
    "Branch": {
        "branch1":"cse",
    "branch2":"eee",
    "branch3":"ec"
    },
    "Semester":{
        "semester1":"s7",
    "semester2":"s5",
    "semester3":"s3"
    }
};
console.log(Student);
document.getElementById("jp").innerHTML = JSON.stringify(Student);
function onStudentClick(){
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let name3 = document.getElementById("name3").value;

    let branch1 = document.getElementById("branch1").value;
    let branch2 = document.getElementById("branch2").value;
    let branch3 = document.getElementById("branch3").value;

    let s1 = document.getElementById("Semester1").value;
    let s2 = document.getElementById("Semester2").value;
    let s3 = document.getElementById("Semester3").value;
    Student.Name.Name1 = name1;
    Student.Name.Name2 = name2;
    Student.Name.Name3 = name3;
    Student.Branch.branch1 = branch1;
    Student.Branch.branch2 = branch2;
    Student.Branch.branch3 = branch3;
    Student.Semester.semester1 = s1;
    Student.Semester.semester2 = s2;
    Student.Semester.semester3 = s3;
    console.log(Student);
    document.getElementById("jp").innerHTML = JSON.stringify(Student);
}