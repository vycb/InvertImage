browser.contextMenus.create({
	id: "invertimage",
	title: "Invert Image",
	contexts: ["all"]
})

browser.contextMenus.onClicked.addListener(function(info, tab){
	if(info.menuItemId !== "invertimage") return;
	
	try{
		browser.tabs.sendMessage(tab.id, {cmd:"invert"})
	}catch(e){
	}
})

