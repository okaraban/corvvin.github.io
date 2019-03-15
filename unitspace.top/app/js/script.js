var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
	var itemClass = this.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem closed';
	}
	if (itemClass == 'accordionItem closed') {
		this.parentNode.className = 'accordionItem open';
	}
}

		var lineFirst = new LeaderLine(
			document.getElementById('three-man-1'),
			document.getElementById('three-man-i-1')
			);
		lineFirst.setOptions({endPlug: "behind", path:"grid", startSocket: 'bottom', endSocket: 'left', color: '#ff7062'})

		var lineSecond = new LeaderLine(
			document.getElementById('three-man-2'),
			document.getElementById('three-man-i-2')
			);
		lineSecond.setOptions({endPlug: "behind", path:"grid", startSocket: 'bottom', endSocket: 'top', color: '#ff7062'})

		var lineThird = new LeaderLine(
			document.getElementById('three-man-3'),
			document.getElementById('three-man-i-3')
			);
		lineThird.setOptions({endPlug: "behind", path:"grid", startSocket: 'bottom', endSocket: 'right', color: '#ff7062'})

		var lineIDP = new LeaderLine(
			document.getElementById('idp'),
			document.getElementById('controller-img')
			);
		lineIDP.setOptions({endPlug: "behind", path:"grid", startSocket: 'right', endSocket: 'left', color: '#7a2fdd'})