var menu = document.getElementById("dropdownMenu")
var dropdownButton = document.getElementById("dropdownButton")

menu.style.display = "none"
dropdownButton.addEventListener("click", () => {
	if (menu.style.display == "none") {
		menu.style.display = ""
	} else {
		menu.style.display = "none"
	}
})