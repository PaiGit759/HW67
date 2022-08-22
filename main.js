 var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
};

let arr = new Array();

function buttonOnclickProperty() {
        if (student.hasOwnProperty('rollno')) {
                arr = arr = Object.keys(student);
        }
        else {
         student = {
                name: "David Rayy",
                sclass: "VI",
                rollno: 12
        };
        arr =  Object.keys(student);
        }

        document.getElementById("cat").innerHTML = "Object property names before property removal = " + arr;
}

function buttonOnclickDeleteProperty() {

        if (student.hasOwnProperty('rollno')) {
                еее = delete student['rollno'];
                arr = Object.keys(student);
        } 
        else {
                arr = getAllProps(student);
                }
                document.getElementById("cat").innerHTML = "Object property names after property removal = " + arr;
}
