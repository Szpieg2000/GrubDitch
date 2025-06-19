var Articles = []

const SloganText = [
	"Thinking in more than 3 dimensions!",
	""
]

function TopBarCreate() {

	var PageHolder =  document.getElementById("PageHolder")
	let TopBarCode = '<div id="Topbar" style="position:sticky; top:0;">'
	TopBarCode = TopBarCode + '<div id="Logo"></div>'
	TopBarCode = TopBarCode + '<a href="Home.html">Home Page</a> | '
	TopBarCode = TopBarCode + '<a href="Articles.html">Articles</a> | '
	TopBarCode = TopBarCode + '<a href="Credits.html">Credits</a></div></br>'
		
		
	PageHolder.innerHTML = TopBarCode + PageHolder.innerHTML
}

function ImageModalCreate() {
	var PageHolder =  document.getElementById("PageHolder")
	
	let ModalCode = '<div id="Modal" class="modal">'
	ModalCode = ModalCode + '<span class="CloseModalImage">&times;</span>'
	ModalCode = ModalCode + '<img class="modal-content" id="ModalContent">'
	ModalCode = ModalCode + '<div id="ModalCaption"></div></div>'
	PageHolder.innerHTML = ModalCode + PageHolder.innerHTML
	
	var Modal = document.getElementById("Modal");
		var ModalContent = document.getElementById("ModalContent");
	var ModalCaption = document.getElementById("ModalCaption");

	function SetUpModalImage(img) {
		img.onclick = function(){
			Modal.style.display = "block";
			ModalContent.src = this.src;
			ModalCaption.innerHTML = this.alt;
		}
	}

	document.querySelectorAll("img.ModalImage").forEach(SetUpModalImage)
	
	var span = document.getElementsByClassName("CloseModalImage")[0];
	span.onclick = function() {
		Modal.style.display = "none";
	}
		
}
	
TopBarCreate()
ImageModalCreate()


