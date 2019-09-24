browser.contextMenus.create({
	id: "invertimage",
	title: "Invert Image",
	contexts: ["all"]
})

var	found=false, medimg=[],	pref=".";
const	SCLS=[], SIDS=[], CSTYLE = "; filter:invert(1);"

function nodechk(ob){
	let sty=ob.getAttribute("style")
	if(!sty){
		sty=''
	}
	if(sty && sty.indexOf(CSTYLE) >-1){
		sty=sty.replace(CSTYLE, '')
	}else{
		sty = sty+CSTYLE;
	}
	ob.setAttribute("style", sty)
}

browser.contextMenus.onClicked.addListener(function(info, tab){
	//if(info.menuItemId !== "invertimage") return	
	try{
		//browser.tabs.sendMessage(tab.id, {cmd:"invert"})
		for(let cl of SCLS){
			//medimg = info.targetElementId.parentNode.parentNode.getElementsByClassName(cl)
			if(SIDS.indexOf(cl)>-1) pref="#"
			medimg = info.targetElementId.closest(pref+cl)
			//medimg = findAncestor(info.targetElementId, cl)
			if(medimg){
				nodechk(medimg)
				found=true
				break
			}
		}

		if(!found){
			nodechk(info.targetElementId)
		}

	}catch(er){
		console.log(`invertimage error: ${er}`)
	}
})

