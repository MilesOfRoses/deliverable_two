function suggestClothing() {

	/*************** Declaring variables ***************/
	let tempClothing;
	let eventTypeClothing;
	let result;
	let tempFahr;
	let EventType;

	/*************** INPUT SECTION ***************/
	tempFahr = parseFloat(document.getElementById("tempFahr").value); 
	EventType = document.getElementById("EventType").value;

	/*************** PROCESS SECTION ***************/
	if (tempFahr < 54) { //Determine clothing based on temperature
		tempClothing = "a coat.";
	} else if (tempFahr >= 54 && tempFahr <= 70) {
		tempClothing = "a jacket.";
	} else if (tempFahr > 70 ){
		tempClothing = "no jacket.";
	} else { //input validation
		alert("Please select a temperature");
		return;
	}

	if (EventType == "Casual") { //determine clothing based on the event type
		eventTypeClothing = "something comfy";
	} else if (EventType == "Semi-Formal") {
		eventTypeClothing = "a polo";
	} else if (EventType == "Formal"){
		eventTypeClothing = "a suit";
	} else { //input validation
		alert("Please select an event type");
		return;
	}
	/*************** OUTPUT SECTION ***************/
	result = "Since it is " + tempFahr + " degrees and you are going to a " + EventType + " event, you should wear " + eventTypeClothing + " and " + tempClothing;
	document.getElementById("result").innerHTML = result;
	console.log(result); //to meet the build specification
}