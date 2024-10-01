// Create a classroom object with properties for:
    // -the list of students
    // -class name
    // -show students funciton
    // -max students 

const classroom = {
    students: [],

    name: "N202",

    // Show students function / method for the classroom object should:
        // -clear current students shown in <p>
        // -loop through list of students and add them to the <p> (<br/> after each student)
    // You can also create the function before the object and then call it in here! "It's like Soda and Pop, its all about syntax or your perfered way."
    showStudents() {
       document.getElementById("students").innerHTML = "";

       for (let i = 0; i < this.students.length; i++) {
        const studentName = this.students[i];
        document.getElementById("students").innerHTML += studentName + "<br/>"
       }

        //    this.students.forEach(function (studentName) {
        //     document.getElementById("students").innerHTML += studentName + "<br/>";
        //    }) 
    },

    maxStudents: 5,
};


// Create a function for adding the new student (make sure it matches the button onclick function call). 
    // This function should check if you there is a seat available for the student. 
        // If there is not, then console.log("No seats availiable!"). 
        // If there are, then add the students name to the students o the classroom object, then run the show students method. 
function newStudent(){
    const currentStudents = classroom.students.length;

    if(currentStudents >= classroom.maxStudents){
        console.log("No Seats")
    }

    else {
        classroom.students.push(document.getElementById("studentName").value);
        console.log("Test", classroom.students)
        classroom.showStudents();

    }
    }








