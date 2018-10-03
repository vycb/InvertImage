var IITarget = {},
		st = "; filter:invert(1);";

browser.runtime.onMessage.addListener(function(msg){
	if (msg.cmd !== "invert") return

	var node = IITarget,am=[],tcus=[],medimg=[],mis=[],uisc=[],_5dec=[],
	_2a2q=[],rn1oszu61=[],done=false;
	_2a2q = node.getElementsByClassName("_2a2q");
	if(node.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode.parentNode &&
			node.parentNode.parentNode.parentNode.parentNode.parentNode){
				if(_2a2q.length ==0){
				_2a2q = node.parentNode.parentNode.getElementsByClassName("_2a2q");
				}
		rn1oszu61 = node.parentNode.parentNode.getElementsByClassName("rn-1lgpqti");
		medimg = node.parentNode.parentNode.getElementsByClassName("media-image");
		uisc = node.parentNode.parentNode.getElementsByClassName("uiScaledImageContainer");
		tcus = node.parentNode.parentNode.getElementsByClassName("tcu-imageWrapper");
		mis = node.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("_3x-2");

		if(node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode &&
				node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode){
				am = node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("AdaptiveMedia");
		}
	}

	if(tcus.length == 0 && mis.length == 0 && medimg.length == 0 && am.length == 0
	&& uisc.length == 0 && _5dec.length == 0 && _2a2q.length == 0 &&rn1oszu61.length==0){
		nodechk(node)
	}
	else
	{
		for(let el of [am, mis, medimg, tcus, uisc,_2a2q,_5dec,rn1oszu61]){
			Array.prototype.filter.call(el, ob=>{
				nodechk(ob)
				done=true
			})
			if(done)
					break
		}
	}
});

function nodechk(node){
	var sty=node.getAttribute("style")
	if(sty.indexOf(st) >-1){
		sty=sty.replace(st, '')
		node.setAttribute("style",sty)
	}else{
		node.setAttribute("style", sty + st);
	}
}

addEventListener('contextmenu', function (e) {
	IITarget = e.target
}, false);
