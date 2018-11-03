var IITarget = {},
		st = "; filter:invert(1);"

browser.runtime.onMessage.addListener(function(msg){
	if (msg.cmd !== "invert") return

	var node = IITarget,am=[],medimg=[],mis=[],done=false;
	if(node.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode.parentNode.parentNode){
		for(let cl of ["_2a2q", "media-image", "_2rea", "_5rgt", "_5dec", "rn-1lgpqti, uiScaledImageContainer, tcu-imageWrapper"]){
			medimg = node.parentNode.parentNode.getElementsByClassName(cl);
			if(medimg.length > 0) break;
		}
		if(medimg.length == 0){
			for(let cl of ["_5rgu", "_3x-2"]){
				mis = node.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName(cl);
				if(mis.length > 0) break;
			}
		}else if(node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode &&
				node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode){
				am = node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("AdaptiveMedia");
		}
	}

	if(mis.length == 0 && medimg.length == 0 && am.length == 0){
		nodechk(node)
	}
	else{
		var done=false;
		for(let el of [am, mis, medimg]){
			Array.prototype.filter.call(el, ob=>{
				nodechk(ob);
				done=true;
			})
			if(done)
					break;
		}
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
