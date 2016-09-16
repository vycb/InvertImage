chrome.contextMenus.create({
	id: "invetimage",
	title: "InvetImage",
	contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener((info, tab)=>{
	if(info.menuItemId === "invetimage"){
		chrome.tabs.sendMessage(tab.id, {cmd:"invert"})
	}
})

