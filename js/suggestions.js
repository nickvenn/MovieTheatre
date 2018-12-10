$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyBWEt1NNeKHQVWXkpyDt3a2_rRH5yiyfTc",
        authDomain: "uwproj1.firebaseapp.com",
        databaseURL: "https://uwproj1.firebaseio.com",
        projectId: "uwproj1",
        storageBucket: "uwproj1.appspot.com",
        messagingSenderId: "623547631250"
    };
    firebase.initializeApp(config);
 
    let database = firebase.database();
 
    let user = "";
    let comment = "";
 
 
    $("#sug-button").on("click", function (event) {
        event.preventDefault();
 
        user = $("#formGroupExampleInput").val().trim();
        comment = $("#formGroupExampleInput2").val();
 
        console.log(user, comment);
 
        if (user === "" || comment === ""){
            $("#formGroupExampleInput2").attr("placeholder", "Whoops! Looks like you didn't add a comment. Please add a suggestion!");
    }else {
 
        database.ref().push({
            user: user,
            comment: comment
        });
 
    }
 
 
 
 });
 
 database.ref().on("child_added", function (snapshot) {
 
    let newRow = $("<tr></tr>");
    let newUser = $("<td></td>").text(snapshot.val().user);
    let newComment = $("<td></td>").text(snapshot.val().comment);
 
    newRow.append(newUser, newComment);
    $("#firebase-data").append(newRow);
 
 
 
 
 });
 
 });