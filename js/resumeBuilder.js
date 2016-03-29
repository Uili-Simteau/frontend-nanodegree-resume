/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Uili Fecteau");
 /*var awesomeThoughts = "I am Uili and I am AWESOME!!";
 console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts); */

var formattedName = HTMLheaderName.replace("%data%", "Uili Fecteau");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);

console.log(formattedName);
console.log(formattedRole);
