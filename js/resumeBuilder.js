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
//var skills = ["awesomeness", "JavaScript", "Art History"];

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*var bio = {
    "name" : "Uili Fecteau",
    "Role" : "Web Developer",
    "Email": "sim**@gmail.com",
    "mobile" : "021 *****22"
    "twitter" : "@Simteau",
    "github" : "simteau",
    "blog" : "simteau",
    "location" : "Naenae, Lower Hutt, 5011, New Zealand"

    "bioPic" : "images/image-uili.jpeg";
    "welcomeMmsg" : "Hi there, Welcome to my resume! Take your \
    shoes off, stay a while.",
    "skills" : skills,
};*/
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedBlog = HTMLblog.replace("%data%", bio.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#main").apend(formattedMobile);
$("#main").apend(formattedEmail);
$("#main").apend(formattedTwitter);
$("#main").apend(formattedGithub);
$("#main").apend(formattedBlog);
$("#main").apend(formattedLocation);
$("#main").apend(formattedBioPic);
$("#main").apend(formattedWelcomeMsg);
$("#main").apend(formattedSkills);


