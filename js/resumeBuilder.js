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
var bio = {
    "name" : "Uili Fecteau",
    "Role" : "Web Developer",
    "contacts" : {
        "mobile" : "021 2394522",
        "email": "simteau@gmail.com",
        "github" : "Uili-Simteau.github.io.git",
        "twitter" : "Simteau",
        "blog" : "simteau",
        "location" : "Naenae, Lower Hutt, 5011, New Zealand"
},
    "welcomeMsg" : "Hi there, Welcome to my resume! Take your shoes off, stay a while.",
    "skills" : ["Awesomeness", " JavaScript", " HTML", "CSS", " Art History", " Archival Research"],
    "bioPic" : "images/image-uili.jpeg",
};

//variables for modifying formatted elements with bio data
var formattedName = HTMLheaderName.replace("%data%", "Uili Fecteau");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts["blog"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

//append formatted bio data
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedBlog);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedWelcomeMsg);
$("#topContacts").append(formattedSkills);

//an array of objects
var work = {
    "jobs" : [
    {
        "title" : "student",
        "employer" : "Enspiral Dev Academy",
        "dates" : "2016",
        "location" : "Wellington",
        "description" : "Awesome Web Developer adn nice guy in training."
    },

    {
        "title" : "Under Tile Heating Installer",
        "employer" : "Warmup Wellington Ltd.",
        "dates" : "2014 to 2016",
        "location" : "Wellington"
        "description" : "I installed underfloor heating elements, and constructed tiled showers with sheet membraine waterproofing",
    },

    {
        "title" : "Archivist",
        "employer" : "Archives New Zealand",
        "dates" : "2006 to 2014",
        "location" : "Wellington"
        "description" : "Providing archival assistance to researchers, arrangement and description work on the film negative collection. YouTube channel development.",
    },

    {
        "title" : "Paint consultant and Bunnings Team Member",
        "employer" : "Bunnings",
        "dates" : "2004 - 2006",
        "location" : "Lower Hutt",
        "description" : "Advised on appropriate paint and materials for customers to use, mixed paint colours, provided general customer service.",
    },

    {
        "title" : "Concept Developer",
        "employer" : "Dowse Art Museum",
        "dates" : "2002 to 2004",
        "location" : "Lower Hutt",
        "description" : "Developed exhibition concepts and assisted in exhibition programme development",
    },

    ]
};

//format work data
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][employer]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["jobs"][title]);
var formattedWorkDates = HTMLworkDates.replace("%data%", work["jobs"][dates]);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["jobs"][location]);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work["jobs"][description]);


//append work data
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkDescription);


var education = {
    "schools" : [
    {
        "name" : "Enspiral Dev Academy",
        "degree" : "N/A",
        "dates" : "2016",
        "location" : "Wellington",
        "major" : "JavaScript Web Development"
    },

    {
        "name" : "Weltec",
        "degree" : "Certificate in Electrical Appliance Installation"
        "dates" : "2013",
        "location" : "Lower Hutt",
        "major" : "Electrical Appliance theory",
    },

    {
        "name" : "Melbourne University",
        "degree" : "Postgraduate Diploma - Art Curatorship and Museum Management",
        "dates" : "1997 to 1999",
        "location" : "Melbourne, Victoria, Australia",
        "major" : "Cross-cultural exhibition practice",
    },

    {
        "name" : "Victoria University",
        "dates" : "1994 to 1996",
        "degree" : "Bachelor of Arts"
        "location" : "Wellington",
        "major" : "Art History",
    }
    ]
};

//format education
var formatted = .replace("%data%", education["schools"][""]);
var formatted = .replace("%data%", education["schools"][""]);
var formatted = .replace("%data%", education["schools"][""]);
var formatted = .replace("%data%", education["schools"][""]);
var formatted = .replace("%data%", education["schools"][""]);
var formatted = .replace("%data%", education["schools"][""]);





//append


