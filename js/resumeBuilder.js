//bio vars
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
    "bioPic" : "images/image-uili.jpeg"
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


//append formatted bio data
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}
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
        "location" : "Wellington",
        "description" : "I installed underfloor heating elements, and constructed tiled showers with sheet membraine waterproofing"
    },

    {
        "title" : "Archivist",
        "employer" : "Archives New Zealand",
        "dates" : "2006 to 2014",
        "location" : "Wellington",
        "description" : "Providing archival assistance to researchers, arrangement and description work on the film negative collection. YouTube channel development."
    },

    {
        "title" : "Paint consultant and Bunnings Team Member",
        "employer" : "Bunnings",
        "dates" : "2004 - 2006",
        "location" : "Lower Hutt",
        "description" : "Advised on appropriate paint and materials for customers to use, mixed paint colours, provided general customer service."
    },

    {
        "title" : "Concept Developer",
        "employer" : "Dowse Art Museum",
        "dates" : "2002 to 2004",
        "location" : "Lower Hutt",
        "description" : "Developed exhibition concepts and assisted in exhibition programme development"
    }

    ]
};

//format work data


//append work data


//work for-in loop
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
};

//projects
var projects = {
    "project" : [
    {
        "title" : "JS Racer",
        "dates" : "2016",
        "description" : "A simple, purely JavaScript, keyboard game.",
        "project image" : "#"
    },

    {
        "title" : "The Awesome Blog of Uili",
        "dates" : "2016",
        "description" : "An on-going, ever developing, blog of my journey through the Dev Academy.",
        "project_image" : "#"
    }
    ]
};

//format projects
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects["project"].title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects["project"].dates);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects["project"].description);
var formattedProjectImage = HTMLprojectImage.replace("%data%", projects["project"].project_image);

//append projects
$("#projects").append(HTMLprojectStart);
$(".project-entry").append(formattedProjectTitle);
$(".project-entry").append(formattedProjectDates);
$(".project-entry").append(formattedProjectDescription);
$(".project-entry").append(formattedProjectImage);


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
        "degree" : "Certificate in Electrical Appliance Installation",
        "dates" : "2013",
        "location" : "Lower Hutt",
        "major" : "Electrical Appliance theory"
    },

    {
        "name" : "Melbourne University",
        "degree" : "Postgraduate Diploma - Art Curatorship and Museum Management",
        "dates" : "1997 to 1999",
        "location" : "Melbourne, Victoria, Australia",
        "major" : "Cross-cultural exhibition practice"
    },

    {
        "name" : "Victoria University",
        "dates" : "1994 to 1996",
        "degree" : "Bachelor of Arts",
        "location" : "Wellington",
        "major" : "Art History"
    }
    ]
};

//format education
var formattedSchoolName = HTMLschoolName.replace("%data%", education["schools"].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education["schools"].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["schools"].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["schools"].location);
var formattedSchoolMajor= HTMLschoolMajor.replace("%data%", education["schools"].major);

//append education
$("#education").append(HTMLworkStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);