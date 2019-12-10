//Homework 5 Java Script
//Name: Wyatt LaRose
//Student Email: Wyatt_LaRose@student.uml.edu
//Computer Science Email: wlarose@cs.uml.edu
//Affiliation: UMass Lowell Computer Science, Junior Year
//Trys to ensure all the inputs are numbers as well as filled out and not left blank
    $(document).ready(function() {
	  $("#inputForm").validate({					// this is used to check when the focus changes from a spot in the form, when it does it checks that input feilds for an error.
	    onfocusout: function(element, event) {
	        this.element(element);
	    },
	    rules: {
	    	num1 : {								// All these rules check for each input to be a number as well as the feild isnt blank
	    		required: true,
	        	number: true
	    	},
	    	num2 : {
	    		required: true,
	        	number: true
	    	},
	    	num3 : {
	    		required: true,
	        	number: true
	    	},
	    	num4 : {
	    		required: true,
	        	number: true
	    	}
	    },
	    messages:{
	    	num1 : {
	    		required: "This field is required",
	    	 	number: "Please ensure your input is a number"
	    	}, 
	    	num2 : {
	    		required: "This field is required",
	    	 	number: "Please ensure your input is a number"
	    	}, 
	    	num3 : {
	    		required: "This field is required",
	    	 	number: "Please ensure your input is a number"
	    	}, 
	    	num4 : {
	    		required: "This field is required",
	    	 	number: "Please ensure your input is a number"
	    	}, 
	    }
	  });
	$(function() {
		// I will only comment the first one because the rest of them are identical for each input

        $( "#num1Slider" ).slider({ //set up the slider
           value: 0, //give it all its required values and properties
           min:-50,
           max: 50,
           step: 1,
           slide: function(event, ui) { //set up slide functiont to set the input to whatever its at and create the table instantly
		        $("#num1").val(ui.value);
		        createTable();
		    }
        });
		 $("#num1").change(function() {
		 // When the input text field is changed it will set the number sliders slider, to the value of the input text field "two way binding" 
		    $("#num1Slider").slider("value", $(this).val());		 
		 });
    });
    $(function() {
        $( "#num2Slider" ).slider({
           value: 0,
           min:-50,
           max: 50,
           step: 1,
           slide: function(event, ui) {
		        $("#num2").val(ui.value);
		        createTable();
		    }
        });
		 $("#num2").change(function() {
		    $("#num2Slider").slider("value", $(this).val());		 
		 });
    });
    $(function() {
        $( "#num3Slider" ).slider({
           value: 0,
           min:-50,
           max: 50,
           step: 1,
           slide: function(event, ui) {
		        $("#num3").val(ui.value);
		        createTable();
		    }
        });
		 $("#num3").change(function() {
		    $("#num3Slider").slider("value", $(this).val());	 
		 });
    });
    $(function() {
        $( "#num4Slider" ).slider({
           value: 0,
           min:-50,
           max: 50,
           step: 1,
           slide: function(event, ui) {
		        $("#num4").val(ui.value);
		        createTable();
		    }
        });
		 $("#num4").change(function() {
		    $("#num4Slider").slider("value", $(this).val());	 
		 });
    });

	





});
  
function submitTable(){
	//This first part makes sure the correct div is in the html file with the ul tags, if it is not it will append it to the propper
	//parent div, this is set up like this becuase to clear all the tabs I remove the tabs div completly.
	/*(*var pass = 1; //make sure the form is valid
	if($("form#inputForm").valid() == false){
		pass = 0
	}*/
	var pass = 1;
	if(pass){
		createTable();//You still have to create the table incase they input text, the only real time updates are provided by the slider.
		var tabTest = document.getElementById("tabs");
		if(tabTest == null){
			 $("div#tabsDel").append("<div id='tabs'><ul></ul></div>");
		}
		$("#tabs").tabs(); //Initializes the tabs
		//This is recycled code to ensure i get the correct dimesions in the correct order, i use this is my create table function
		var num1 = document.getElementById("num1").value;
		var num2 = document.getElementById("num2").value;
		var num3 = document.getElementById("num3").value;
		var num4 = document.getElementById("num4").value;
		if(+num2 < +num1){
				var temp = num1;
				num1 = num2;
				num2 = temp;
			}
			if(+num4 < +num3){
				var temp = num3;
				num3 = num4;
				num4 = temp;
		}
			//This portion of the code I use https://stackoverflow.com/questions/18572586/append-to-dynamically-created-tab for help in understanding
			//how to create the tabs correctly 
        var tabNum = $("div#tabs ul li").length + 1; //Sets the tabs length each time so we know what to name the tab
        $("div#tabs ul").append("<li><a href='#tab-"+ tabNum+ "'>" + num1 + "x" + num2 + "x" + num3 + "x" + num4 + "</a><span class='ui-icon ui-icon-close' role='presentation'></span></li>"); //Set the name of the tab using the data entered by the user
        $("div#tabs").append('<div id="tab-' + tabNum + '"></div>'); //creates a div to store the multiplication table in
        $("div#tab-"+tabNum).append($("#multTable").html());//adds the html code for the table
        $("#tabs").tabs("refresh"); //refresh the tabs
        $("#tabs").tabs("option", "active", -1);//set the tabs active

        //This code is derived from https://jqueryui.com/tabs/#manipulation, they have a very indepth demo on how
      	//to manipulate tabs for jquery.
       $("#tabs").on( "click", "span.ui-icon-close", function() {
       var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
       $( "#" + panelId ).remove();
       $("#tabs").tabs( "refresh" );
   		});
	}      
}
function clearTabs(){
        $("#tabs").remove();//this clears all the tabs by removing the tabs div, the submit table button will add those tags back in if they are missing and the button is pressed.
}

function createTable(){
	//This function will make a table with the id multTable, this test to see if there already is a table and clears it if there is
	$("errorMsg").hide();
	
	
	
	var table = document.getElementById("multTable");
	if(table != null){
		table.parentNode.removeChild(table);
	}
	//This takes in all the inputs from the form
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;
	var num4 = document.getElementById("num4").value;
	//Pass is used to error check all possibilites for other than numbers
	
	
	/*
	//These if statments check each input as well as the input pairs and correctly changes the heading to state the inputs that didnt not recieve number input
	if(isNaN(num1)){
		document.getElementById("mult1").innerHTML = "Enter Start and End Multiplier: *The first input entered was not a number please try again*";
		pass = 0;
	}
	if(isNaN(num2)){
		document.getElementById("mult1").innerHTML = "Enter Start and End Multiplier: *The second input entered was not a number please try again*";
		pass = 0;
	}
	if(isNaN(num2) && isNaN(num1)){
		document.getElementById("mult1").innerHTML = "Enter Start and End Multiplier: *Both inputs are not numbers please try again*";
		pass = 0;
	}
	if(isNaN(num3)){
		document.getElementById("mult2").innerHTML = "Enter Start and End Multiplicand: *The first input entered was not a number please try again*";
		pass = 0;
	}
	if(isNaN(num4)){
		document.getElementById("mult2").innerHTML = "Enter Start and End Multiplicand: *The second input entered was not a number please try again*";
		pass = 0;
	}
	if(isNaN(num3) && isNaN(num4)){
		document.getElementById("mult2").innerHTML = "Enter Start and End Multiplicand: *Both inputs are not numbers please try again*";
		pass = 0;
	}
	//Pass is default 1, if its not set to 0 by any of the error checking there are no errors then the program continues.
	*/
	var pass = 1;
	if(pass){
		//Reset the headings incase someone made a mistake prior we want them to reset to default
		document.getElementById("mult1").innerHTML = "Enter Start and End Multiplier:";
		document.getElementById("mult2").innerHTML = "Enter Start and End Multiplicand:";
		//counter variables
		var i;
		var j;
		//Input order check, this will swap them so the second number is the higher number so it doesnt matter what the user inputs.
		if(+num2 < +num1){
			var temp = num1;
			num1 = num2;
			num2 = temp;
		}
		if(+num4 < +num3){
			var temp = num3;
			num3 = num4;
			num4 = temp;
		}
		//Figure out the width and height of the table
		var width = (+num2 - +num1) + 1;
		var height = (+num4 - +num3) + 1;
		//Create the table at the end of the doucument body with an id multTable
		var tableParent = document.createElement("TABLE");
		tableParent.setAttribute("id", "multTable");
		document.body.appendChild(tableParent);
		//First for loop is the rows, the second is the colums, 3 cases are checked first row first column will be set to nothing, first row will be
		//set to the inputs ie 5,9 will set first row to 5,6,7,8,9 not include row 1 column 1 which is set to nothing as previously mentioned.
		//Then it sets the first column how it set the row just when the column or j is equal to 0, then everything else is the multiplication
		//of each number based on the math (+num1 + j-1)*(+num3 + i-1), this is how you get the values from the first row and first columns
		//while it creates the cell it sets the text then moves on to the next and the program is finished.
		for(i = 0; i <= height; i++){
			var row = tableParent.insertRow(i);
			for(j = 0; j <= width; j++){
				if(i == 0 && j == 0){
					var cell = row.insertCell(j);
					cell.innerHTML = "";
				}else if(i == 0){
					var cell = row.insertCell(j);
					cell.innerHTML = (+num1 + j-1);
				}else if(j == 0){
					var cell = row.insertCell(j);
					cell.innerHTML = (+num3 + i-1);
				}else{
					var cell = row.insertCell(j);
					cell.innerHTML = (+num1 + j-1)*(+num3 + i-1);
				}
				
			}
			
		}

	}
}
	




