const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		if (tab.classList.contains("selected")) {
			return;
		}

		selectTab(tab);

		openContent(tab);
	});
});

function selectTab(tab) {
	const selectedTab = document.querySelector(".tab.selected");
	selectedTab.classList.remove("selected");

	tab.classList.add("selected");
}

function openContent(tab) {
	const selectedInfo = document.querySelector(".info.selected");

	selectedInfo.classList.remove("selected");

	const contentInfoId = `${tab.id}-content`;

	const displayInfo = document.getElementById(contentInfoId);

	displayInfo.classList.add("selected");
}
