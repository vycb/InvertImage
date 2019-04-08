var IITarget = {},
		st = "; filter:invert(1);"

browser.runtime.onMessage.addListener(function(msg){
	if (msg.cmd !== "invert") return

	var node = IITarget, found=false, medimg=[],	pref=".";
	const	scls=["css-1dbjc4n","rn-156q2ks","rn-16y2uox","rn-10m9thr","_26ii _-_b", "_2a2q", "media-image", "_2rea", "_5rgt", "_5dec", "uiScaledImageContainer", "tcu-imageWrapper","_5rgu", "_3x-2","AdaptiveMedia"]
	const	sids=["AdaptiveMedia"]
	for(let cl of scls){
		//medimg = node.parentNode.parentNode.getElementsByClassName(cl);
		if(sids.indexOf(cl)>-1) pref="#"
		medimg = node.closest(pref+cl)
		//medimg = findAncestor(node, cl);
		if(medimg){
			nodechk(medimg)
			found=true
			break
		}
	}
	if(!found){
		nodechk(node)
	}

});

function nodechk(ob){
	var sty=ob.getAttribute("style")
	if(!sty){
		sty=''
	}
	if(sty && sty.indexOf(st) >-1){
		sty=sty.replace(st, '')
	}else{
		sty = sty+st;
	}
	ob.setAttribute("style", sty)
}

addEventListener('contextmenu', function (e) {
	IITarget = e.target
}, false);
