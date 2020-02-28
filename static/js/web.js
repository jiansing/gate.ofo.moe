function uselessWebButton(button, popup) {
	// UI elements
	var buttonElement = button;
	var popupElement = popup;

	var initialClick = false;
	var randomRange = 15;

	// Useless websites: url | uses flash
	// Commented out websites which have crashed.
	var sitesList = [
		["https://go.ofo.moe/studylikn3"],
		["https://go.ofo.moe/studylink2"],
		["https://go.ofo.moe/studylink1"],
		["https://go.ofo.moe/funny1"],
		["https://go.ofo.moe/funny2"],
		["https://go.ofo.moe/funny3"],
		["https://go.ofo.moe/funny4"],
		["https://go.ofo.moe/funny5"],
		["https://go.ofo.moe/funny6"],
		["https://go.ofo.moe/tool1"],
		["https://go.ofo.moe/tool2"],
		["https://go.ofo.moe/tool3"],
		["https://go.ofo.moe/tool4"],
		["https://go.ofo.moe/tool5"],
		["https://go.ofo.moe/useless1"],
		["https://go.ofo.moe/useless2"],
		["https://go.ofo.moe/useless3"],
		["https://go.ofo.moe/useless4"],
		["https://go.ofo.moe/useless5"],
		["https://go.ofo.moe/useless6"],
		["https://go.ofo.moe/useless7"],
		["https://go.ofo.moe/useless8"],
		["https://go.ofo.moe/useless9"],
		["https://go.ofo.moe/useless10"],
		["https://go.ofo.moe/useless11"],
		["https://go.ofo.moe/useless12"],
		["https://go.ofo.moe/useless13"],
		["https://go.ofo.moe/useless14"],
		["https://go.ofo.moe/home"]
		
	];

	var sites = null;

	// Prepares and binds the button
	var init = function() {
		button.onclick = onButtonClick;
		sites = sitesList.slice(0);
	};

	// Selects and removes the next website from the list
	var selectWebsite = function() {
		var site, range, index;

		range = randomRange > sites.length ? sites.length : randomRange;
		index = Math.floor(Math.random() * range);

		site = sites[index];
		sites.splice(index, 1);

		return site;
	};

	var onButtonClick = function() {
		

		var url = selectWebsite()[0];
		window.open(url);

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice(0);
		}
	};

	init();
}