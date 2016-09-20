var IITarget = {},
	st ="; -webkit-filter:invert(1); filter:invert(1);";

chrome.runtime.onMessage.addListener(msg=>{
	if(msg.cmd === "invert"){

		var node = IITarget,
			mis = node.parentNode.getElementsByClassName("media-image"),
			tcus = node.parentNode.parentNode.parentNode.getElementsByClassName("tcu-imageWrapper"),
			arr = [];

		node.setAttribute("style", node.getAttribute("style") + st)

		arr.push(mis); arr.push(tcus);

		for(var i in arr){
			Array.prototype.filter.call(arr[i], ob=>{
				ob.setAttribute("style", ob.getAttribute("style") + st)
			})
		}
	}
})

window.addEventListener("mousedown", function(e){
	if(e.button === 2){
		IITarget = e.target
	}
}, true)