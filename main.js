var IITarget,
	st ="; -webkit-filter:invert(1); filter:invert(1);";

chrome.runtime.onMessage.addListener((msg)=>{
	if(msg.cmd === "invert"){

		var node = IITarget,
			mis = node.parentNode.getElementsByClassName("media-image")

		node.setAttribute("style", node.getAttribute("style") + st)

		Array.prototype.filter.call(mis, (mi)=>{
			mi.setAttribute("style", mi.getAttribute("style") + st)
		})
	}
})

window.addEventListener("click", (e)=>{
	IITarget = e.target
})