var IITarget = {}
const	ST = ";filter:invert(1) hue-rotate(180deg);",
	/* filter:invert(1) hue-rotate(180deg); Feature: The colors only change from light to dark and vice versa {{{
	 By utopianknight (https://github.com/utopianknight) }}}*/
	SCLS=["r-1p0dtai","css-1dbjc4n", "rn-156q2ks","rn-10m9thr",
	"rn-16y2uox","_26ii _-_b", "_2a2q", "media-image", "_2rea", "_5rgt",
	"_5dec", "uiScaledImageContainer", "tcu-imageWrapper","_5rgu","_3x-2",
	"AdaptiveMedia"],
	SIDS=["AdaptiveMedia"]

browser.runtime.onMessage.addListener(function(msg){
	if (msg.cmd !== "invert") return

	var node = IITarget, found=false, medimg=[],	pref=".";
	for(let cl of SCLS){
		//medimg = node.parentNode.parentNode.getElementsByClassName(cl);
		if(SIDS.indexOf(cl)>-1) pref="#"
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
	if(sty && sty.indexOf(ST) >-1){
		sty=sty.replace(ST, '')
	}else{
		sty = sty+ST;
	}
	ob.setAttribute("style", sty)
}

addEventListener('contextmenu', e => {
	IITarget = e.target
}, false);
