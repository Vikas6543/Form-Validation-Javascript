function validation(){
		var user = document.getElementById("user").value;
	    var pass = document.getElementById("pass").value;
		var conpass = document.getElementById("conpass").value;
		var MobileNumber = document.getElementById("MobileNumber").value;
		var emails = document.getElementById("emails").value;


		if(user == ""){
			document.getElementById("username").innerHTML="** Please fill the username field";
			return false;
		}
		if((user.length<=2) || (user.length>20)){
			document.getElementById("username").innerHTML="** username must be in-between 2 to 20";
			return false;
		}
		if(!isNaN(user)){
			document.getElementById("username").innerHTML="** only character are allowed";
			return false;
		}


		if(pass == ""){
			document.getElementById("passwords").innerHTML="** Please fill the password field";
			return false;
		}
		if((pass.length<=5) || (pass.length>20)){
			document.getElementById("passwords").innerHTML="** password length must be in-between 5 to 20";
			return false;
		}
		if(pass!=conpass){
			document.getElementById("passwords").innerHTML="** password are not matching";
			return false;
		}


		if(conpass == ""){
			document.getElementById("confirmpass").innerHTML="** Please fill the confirm password field";
			return false;
		}


		if(MobileNumber == ""){
			document.getElementById('mobileno').innerHTML="** Please fill the mobile number field";
			return false;
		}
		if(isNaN(MobileNumber)){
			document.getElementById("mobileno").innerHTML="** user must enter only digits not a characters";
			return false;
		}
		if(MobileNumber.length!=10){
			document.getElementById("mobileno").innerHTML="** mobile number must be 10 digits";
			return false;
		}


		if(emails == ""){
			document.getElementById("emailids").innerHTML="** Please fill the email field";
			return false;
		}
		if(emails.indexOf("@")<0){
			document.getElementById("emails").innerHTML="** @ is at invalid position";
			return false;
		}
		if((emails.charAt(emails.length-4)!=".") && (emails.charAt(emails.length-3)!=".")){
			document.getElementById("emails").innerHTML="** . is at invalid position";
			return false;
		}
	}