// An array is just a LIST of things. Numbers, words, people, whatever can be made a list of. Not all of them have to be the same data type. You just need the right syntax.

// [] are for arrays.

// Problems

    // 0. Pre-work!
    let studentGrades = [78,86,92,77]
    // This function does the work of problem 1.
        function printAnswer(answer){
            answersPTag.innerHTML += `<br/> ${answer}`;
            }
            // Still don't fully understand perimeters.


    // Instead of having to type .getEleentById every time, just make the variable to use it.
    const answersPTag = document.getElementById("answers");

    // 1. Arrays will print as a string seperated with , by default.
    answersPTag.innerHTML += studentGrades;

    // 2. Access specific values in array using indexes
    // studentGrades[0]; indexes start at 0, then 1, then 2, then 3...
    answersPTag.innerHTML += `<br/> ${studentGrades [1]}`;

    // 3. Assign new values to array items in the same way that you would a variable declared with let.
    studentGrades[1] = 83;
    printAnswer(studentGrades[1]);

    // 4. Same as 1
    // answersPTag.innerHTML += `<br/> ${studentGrades}`;
    printAnswer(studentGrades);

    // 5. All array have a length even if it is ZER0
    // Length is how many elements are in the array.
    printAnswer(studentGrades.length);

    // 6. Arrays have a forEach method that takes a funciton as the parameter. That funciton has access to the values in the array.
    // .forEach applies for each element in the array
    studentGrades.forEach(function (currentStudent, currentStudentIndex) {
        // Loop here
        studentGrades[currentStudentIndex] += 1;
        printAnswer(studentGrades[currentStudentIndex]);
      });

    // 7. Same as 1
    printAnswer(studentGrades);

    // 8. Similar to 2
    // indexOfLastStudent opperates as 3 for this array.
    const indexOfLastStudent = studentGrades.length - 1;
    printAnswer(studentGrades[indexOfLastStudent]);

    // 9. Use variable to track total of grades added together. Looped through array and added to total. Mathed up the average!
    let totalOfGrades = 0;
    studentGrades.forEach(function (currentGrade){
        totalOfGrades += currentGrade;
    });
    console.log(totalOfGrades);

    const averageGrade = totalOfGrades / studentGrades.length;
    printAnswer(averageGrade);

    // 10.
    printAnswer(averageGrade >= 80);

// Lab Extras

    // 0. Pre-work!
    const friends = [" Elmo", " Spongebob", " CatDog", " Danny Phantom", " Timmy Turner"];

    function printFriends(answer){
        document.querySelector("#extraAnswers").innerHTML += `<br/> ${friends}`;
    }

    // 1. Add times to an array using .push method. Adds onto the end of array.
    friends.push(" Jimmy Neutron");
    printFriends();

    // 2. Remove the last item to an array using the .pop method.
    friends.pop();
    printFriends();

    // 3. Remove the first item in an array using .splice method.
    // .splice(what index you want to delete, how much you want to delete);
    friends.splice(0, 1);
    printFriends();

    // 4. Add item to front of array using .splice
    friends.splice(0, 0, " Invader Zim");
    printFriends();

    // 5. Using .splice again!
    friends.splice(2, 1);
    printFriends();

    // 6. Splice one more time!!!
    friends.splice(2, 0, " Gir");
    printFriends();

    // 7. He who controls the .splice controls the universe!!!!!!
    friends.splice(3, 0, [" Patrick", " Squidward"]);
    printFriends();
    // .splice method takes 3 perameters:
        // 1. What index to start with
        // 2. How many starting from that index should be deleted W
        // 3. What to add to the array (This could be just a value or another array of values to add!)

// Objects

    // 1. Creating the object
    const person = {
        firstName: "Austin",
        lastName: "Cohen",
        age: 25,
        homeTown: "Indianapolis",
        getFullName(){
            return `${this.firstName} ${this.lastName}`;
        },
    };
    
    // 2. Display the info
    document.getElementById("fullName").innerHTML += person.getFullName();

    // 3. Change the value
    person.age += 1;
    document.getElementById("newFProp").innerHTML += person.age;

    // 3.5 Printing Object Variable
    // Doesn't know what to do and will print [object, Object]
    // JSON.stringify shows everthing defined in the object.
    document.getElementById("newFProp").innerHTML += `<br/> ${JSON.stringify(person)}`;

    // 4. Remove Property from person using delete keyword
    // delete object.propertyName
    delete person.homeTown;
    delete person.favoriteColor;
    document.getElementById("newFProp").innerHTML += `<br/> ${JSON.stringify(person)}`;

    // 5. Print a sentence using our object
    console.log(`${person.getFullName()} is ${person.age} years old.`);

    // 6. Add a method to an existing object
    person.isASenior = function(){
        return this.age >= 65;
    };

    console.log(person.isASenior());
    person.age += 70;
    console.log(person.isASenior());

// Objects Extra

    // 0. Create the object
    let myCar = {
        year: 2005,
        make: "Ford",
        model: "Fusion",
        automatic: true,
        mpg: 120,
        efficiency: "Good!"
    }