//validation functions

//vaildate email
function Validate_email(){

	var Email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email = document.getElementById("Email").value;

	if(!Email_pattern.test(email)){
		alert("You have entered invalid email");
		return false;
	}
	else{
		return true;
	}
}


//validate phone
function Validate_phone(){

	var Number_pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var phone = document.getElementById("Phone").value;

	if(!Number_pattern.test(phone)){
		alert("You have entered invalid Phone Number");
		return false;
	}
	else{
		return true;
	}
}


//validate qualification
function Validate_qualificiation(){

	var qualification = document.getElementById("Qualifications").value;
	if(qualification == ''){
		alert("You must fill out Qualification field");
		return false;
	}
	else{
		return true;
	}
}

//validate training
function Validate_training(){

	var training = document.getElementById("trainingAndCourses").value;

	if(training == ''){
		alert("You must fill out Training and Course field");
		return false;
	}
	else{
		return true;
	}
}

//validate languages
function Validate_Languages(){

	var AR = document.getElementById("AR");
	var EN = document.getElementById("EN");
	var FR = document.getElementById("FR");

	if (AR.checked == false && EN.checked == false && FR.checked == false){
		alert("Please Choose at least one language");
		return false;
	}
	else{
		return true;
	
}
}

//validation feedback form

//validate name

function Validate_name(){
	
	
	var name = document.getElementById("Name").value;
	if(name == ''){
		alert("You must fill your name");
		return false;
	}
	else{
		return true;
	}
}

//validate things liked
function Validate_things(){
	
	var design = document.getElementById("design");
	var contents = document.getElementById("contents");
	var easeOfUse = document.getElementById("easeOfUse");

	if (design.checked == false && contents.checked == false && easeOfUse.checked == false){
		alert("Please Choose at least one things you liked");
		return false;
	}
	else{
		return true;
	}
}

//show feed back information
function showInfo(){
	
	var vname = Validate_name();
	var vemail = Validate_email();
	var vthings = Validate_things();
	
	if ( vname && vemail && vthings){ 

	
	
	//found the things liked
	
		var things = "";
		if(document.getElementById("design").checked){
			things +="Site design";
		}
		if(document.getElementById("contents").checked){
			things +=",Contents ";
		}
		if(document.getElementById("easeOfUse").checked){
			things +=", Ease of Use ";
		}



	document.writeln("<p>Thanks \"inserted Name\""+document.getElementById("Name").value + " for your comments..</p>" +
						"<p>Your e-mail: "+document.getElementById("Email").value+"</p>" +
						"<p>Things you liked on my site:  "+things+".</p>");
						
	}
	
}

//Add Field
function addFeild(){

        //birth of date feild
        var birthOfDate = document.createElement("input");
		birthOfDate.name = "PlaceOfBirth";
		birthOfDate.id = "place";
		birthOfDate.type = "text";

		newField.innerHTML = "Place Of Birth  ";
	    // insert element
	    newField.appendChild(birthOfDate);
}

//Disply CV

function displayCV(){


	var vname = Validate_email();
	var vemail = Validate_phone();
	var vqual = Validate_qualificiation();
	var vval = Validate_training();
	var vlangu = Validate_Languages();

	if(vname && vemail && vqual && vval & vlangu){
		
	//found the languages
		var Languages = "";
		if(document.getElementById("AR").checked){
			Languages +="Arabic";
		}
		if(document.getElementById("EN").checked){
			Languages +="English ";
		}
		if(document.getElementById("FR").checked){
			Languages +=",Franch ";
		}


	//the new values(fields)
		var theNewFieldInformation=" ";

			if(document.body.contains(document.getElementById("place"))){
				theNewFieldInformation+="<p>Place Of Birth :"+document.getElementById("place").value+"</p>";
			}


	document.writeln("<h1>Your Full CV:</h1> "+"<p>Name : "+document.getElementById("Name").value +"</p>" +
	"<p>Sex : " + document.getElementById("sex").value +"</p>" + "<p>Nationality :" + document.getElementById("Nationality").value	+ "</p>" +
	"<p>Date of Birthday : " + document.getElementById("Day").value+"/"+ document.getElementById("Month").value+ "/"+
	document.getElementById("Year").value + "</p>"
	+ theNewFieldInformation +"<p>E-mail : "+ document.getElementById("Email").value+"</p>"
	+	"<p>Telephone :" + document.getElementById("Phone").value+ "</p>" +
	"<p>Qualifications :" + document.getElementById("Qualifications").value + "</p>" +
	"<p>Traning and Course :" + document.getElementById("trainingAndCourses").value +"</p>" +
	"<p>Language :" + Languages+"</p>");
	
	}

}

//Favotrite book function

var coll = document.getElementsByClassName("BOOK");
var i;

 for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.maxHeight){
content.style.maxHeight = null;
} else {
content.style.maxHeight = content.scrollHeight + "px";
}
});
}


//Image map functions

//show text when mouse over 
function showText(day){
	document.getElementById(day).style.display ="block";
}

//hide text when mouse not over

function hideText(day){
	document.getElementById(day).style.display ="none";
}