// Reference variables
// Starting with reference variable first. Its just a solid foundation and a good place to start.
let friendNameInputRef = document.getElementById("friendName");
let friendsListRef = document.getElementById("friendsList");

// Create a variable to track friends
// Using an array[] makes the list easier to track!
let myFriends = [];

// Function for adding friend
// Don't need parameters for this one because were pulling from what the user had input.
function addFriend(){
    // Get the name the user typed in
    let nameValue = friendNameInputRef.value;

    // Add the name to the friends list
    // Created a button that will appear next to the friends name. We add the function of the button bellow.
        // friendsListRef.innerHTML += 
        //     `<li>
        //     ${nameValue} <button onclick="removeFriend('${nameValue}')">X</button>
        //     </li>`;


    // add friend to myFriends List
    myFriends.push({name: nameValue, color: "black" });
    showFriends();

    // clear the name the user types so they can type te next name
    friendName.value = "";

    console.log(myFriends);
}

function removeFriend(friendName){
    // Use variable to track index of friend to remove
    let friendIndex;

    // Loop through current friends to find the friendName
    // (i)= Index starts at 0; i is less than the length of my array; increment up
    for(let i = 0; i < myFriends.length; i++)
        // if the names match, thats the i I want
     {
        if(myFriends[i] === friendName){
            friendIndex = i;
        }
    }

    // Remove the person from the list
    myFriends.splice(friendIndex, 1)
    // console.log(showFriends);
    showFriends();
}

// Function to loop through myFriends and show them on the page
function showFriends(){
    // clear pages old friends list
    friendsListRef.innerHTML= "";

    // loop through friends
    myFriends.forEach(function (friend, friendIndex) {
        // add the name to the friends list
        friendsListRef.innerHTML += `<li>
        <span style="color: ${friend.color} ">${friend.name}</span>
        <button onclick="removeFriend('${friendIndex}')">X</button>
        <button onclick="moveFriend('${friendIndex}', true)">Up</button>
        <button onclick="moveFriend('${friendIndex}', false)">Down</button>
        <input 
        type="color" name="friendTextColor${friendIndex}" 
        id="friendTextColor${friendIndex}"
        onchange="changeFriendTextColor('${friendIndex}', event.currentTarget)
        ></input>

        </li>`;
});


}

function changeFriendTextColor(friendIndex, inputRef){
    console.log(friendName + " text color to" + inputRef.value);
    let friendName = myFriends[friendIndex].name;
    myFriends.splice(friendIndex, 1, {name: friendName, color: inputRef.value});

    showFriends()
}

// function to clear list
function clearList(){
    myFriends.splice(0, myFriends.length);

    showFriends();
}

// function to move friends ranking
function moveFriend(friendIndex, isMovingUp){

    let friendNewIndex;

    // for(let i = 0; i < myFriends.length; i++){
    //     if(myFriends[i].name === friendName){
    //         friendIndex = i;
    //         // ['A','B','C'] move 'B' up 1 space. Index of 'B' is originally 1. This is what the result should be = ['B','A','C'] so the new index would be 0
            if(isMovingUp){
                friendNewIndex = friendIndex - 1;
            }
            // ['A','B','C'] move 'B' down 1 space. Index of 'B' is originally . This is what the result should be = ['A','C','B'] so the new index would be 1
            else{
                friendNewIndex = friendIndex + 1;
            }
    //     }
    // }
    showFriends();
}

