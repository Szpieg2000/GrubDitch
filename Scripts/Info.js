var Articles = []

const SloganText = [
	"Thinking in more than 3 dimensions!",
	""
]

function TopBarCreate() {

	var PageHolder =  document.getElementById("PageHolder")
	let TopBarCode = '<div id="Topbar">'
	TopBarCode = TopBarCode + '<div id="Logo"></div>'
	TopBarCode = TopBarCode + '<a href="Home.html">Home Page</a> | '
	TopBarCode = TopBarCode + '<a href="Articles.html">Articles</a> | '
	TopBarCode = TopBarCode + '<a href="Credits.html">Credits</a></div></br>'
		
		
	PageHolder.innerHTML = TopBarCode + PageHolder.innerHTML
}
TopBarCreate()