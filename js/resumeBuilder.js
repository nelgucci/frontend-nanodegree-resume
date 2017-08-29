
 var bio = {
 	"name": "Arnel Gutierrez",
 	"role": "Front-End Web Developer",
 	"contacts": {
 		"mobile": "+1(929)327-8686",
 		"email": "nelgucci28@gmail.com",
 		"twitter": "@nelGucci",
 		"facebook": "nel gutierrez",
 		"github": "nelgucci",
 		"location": "82nd Street, Jackson Heights, New York"
 	},
 	"welcomeMessage": "“Believe in your infinite potential. Your only limitations are those you set upon yourself.” ― Roy T. Bennett",
 	"skills": ["Programming (C++, C, Visual C#, UNIX, JavaScript)", "Computer Aided Design (AutoCAD) & Diptrace", "PCB(printed circuit board) Fabrication and design", "Software/Hardware Troubleshooting", "Project Management", "Networks Technology"],
 	"biopic": "images/me.jpg"

 };

bio.display = function() {
	 var formattedName = HTMLheaderName.replace("%data%", bio.name);
	 $("#header").append(formattedName);

	 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	 $("#header").append(formattedRole);

	 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	 $("#header").append(formattedMobile);

	 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	 $("#header").append(formattedEmail);

	 var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	 var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	 var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
     $('#topContacts, #footerContacts').append(formattedGithub.link("https://github.com/nelgucci"),formattedTwitter.link("https://twitter.com/nelGucci"), formattedLocation.link("#"));
 
	 var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	 $("#header").append(formattedBioPic);

	 var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
     $('#header').append(formattedWelcomeMsg);

	 if (bio.skills.length > 0) {
	 	$("#header").append(HTMLskillsStart);
	 	for (s = 0; s < bio.skills.length; s++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);
                $("#skills").append(formattedSkills);
            }
 	}
};

bio.display();

 var education = {
 	"schools": [{
 		"name": "University of the East",
 		"location": "Caloocan City, Philippines",
 		"degree": "Bachelor of Science",
 		"majors": ["Computer Engineering"],
 		"dates": "2011-2016",
 		// "url": "https://www.ue.edu.ph/caloocan/index.html"
 		}],
 	"onlineCourses": [{
 		"title": " Front-End Nano degree",
 		"school": "Udacity",
 		"dates": "2017",
 		"url": "Udacity"
 		}]	
 };

 var work = {
 	"jobs": [{
 		"employer": "San Miguel Brewery Inc.",
 		"title": "Student Intern",
 		"dates": "April 2014 - June 2014",
 		"description": "Information System Management Department",
        "location": "#40 San Miguel Avenue, Mandaluyong City, Metro Manila"
 	},	{
 		"employer": "WeServ Systems International, Inc.",
 		"title": "Remote Infrastructure Management Engineer(Trainee)",
 		"dates": "May 2016 - March 2016",
        "location": "Net Square Bldg., Bonifacio, Metro Manila, Philippines",
 		"description": "WeServ is a subsidiary of Fujitsu PH Inc.. It specializes in application services, BPO Services, Service Desk and Remote Infrastructure Management Outsourcing for the international market."
 	}
 	]
 };

 var projects = {
 	"projects": [{
 		"title": "Automated Multi-Sensor Security Bot",
 		"dates": "Mar 2016 – Mar 2016",
 		"description": "The main idea of this system is to detect unwanted events and to send notification to the user about what is happening in the location of the unit. The Security Bot involves providing the user notification and information. It includes notifying the user by sending a notification via android application through a local area network, it will send a notification regarding of what is happening in the present location of the device.",
 		"images": ["images/project1.jpg", "images/project2.jpg", "images/project3.jpg"]
 	}]
 };

education.display = function() {
	for(var ed = 0; ed < education.onlineCourses.length; ed++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[ed].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
		$(".education-entry:last").append(formattedschoolLocation);

        for(var major = 0; major < education.schools[ed].majors.length; major++) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
            $(".education-entry:last").append(formattedschoolMajor);
            }
		}
	for(var edu = 0; edu < education.schools.length; edu++) {
		$("#education").append(HTMLonlineClasses,HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
		var formattedShoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedShoolTitle);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url.link("https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"));
        $(".education-entry:last").append(formattedOnlineURL);
	}
};

education.display();

work.display = function() {
	 for (var job=0;job<work.jobs.length;job++) {
	 	$("#workExperience").append(HTMLworkStart);
	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	 	$(".work-entry:last").append(formattedEmployerTitle);
	 	var fromattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	 	$(".work-entry:last").append(fromattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
	 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 	$(".work-entry:last").append(formattedDescription); 	

 	}
 	
 };
 work.display();

 ////////////////////////////////////////
// $(document).click(function(loc){
// 		var x = loc.pageX;
// 		var y = loc.pageY;
// 		logClicks(x,y);
// });

 // function inName(name) {
 // 	name = name.trim().split(" ");
 // 	console.log(name);
 // 	name[1]=name[1].toUpperCase();
 // 	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
 // 	return name[0]+ " "+ name[1];
 // }
 // $('#main').append(internationalizeButton);


 projects.display = function() {
 	for(var proj=0; proj<projects.projects.length;proj++){
 		// for(proj in projects.projects){ 
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
 		$(".project-entry:last").append(formattedTitle);

 		var fromattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
 		$(".project-entry:last").append(fromattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
 		$(".project-entry:last").append(formattedDescription);

 		if(projects.projects[proj].images.length>0){
 			for(var img=0;img<projects.projects[proj].images.length;img++){
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[img]);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}
 	}
 };
projects.display();


$("#mapDiv").append(googleMap);


