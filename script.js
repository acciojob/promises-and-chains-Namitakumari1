//your JS code here. If required.
let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
   if(ageInput.value === "" || nameInput.value === ""){
		alert("Please enter valid details.");
		return;
	}

	const promise = new Promise((resolve,reject)=>{
		if(Number(ageInput.value) > 18){
			setTimeout(()=>{
				resolve(`Welcome, ${nameInput.value}. You can vote.`);
			},4000);
		}
		else{
			setTimeout(()=>{
				reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
			},4000);
		}
	})

	promise.then(data => alert(data))
			.catch(error => alert(error));
});
