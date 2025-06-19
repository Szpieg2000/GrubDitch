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

	document.querySelectorAll("img.ModalImage").forEach(function(img) {
		img.onclick = function(){
			Modal.style.display = "block";
			ModalContent.src = this.src;
			ModalContent.style.visibility = "visible"
			ModalCaption.innerHTML = this.alt;
			
			ModalContent.style.height = "80%";
			ModalContent.style["max-width"] = "700px";
			
			ModalCaption.style.height = "150px";
			ModalCaption.style.width = "80%";
			ModalCaption.style["font-size"] = "100%";
		}
	})
	
	document.querySelectorAll("[data-ModalText]").forEach(function(Text) {
		Text.onclick = function(){
			Modal.style.display = "block";
			ModalContent.style.visibility = "hidden"
			ModalCaption.innerHTML = this.dataset.modaltext;
			
			ModalContent.style.height = "0";
			ModalContent.style["max-width"] = "0";
			
			ModalCaption.style.height = "100%";
			ModalCaption.style.width = "100%";
			ModalCaption.style["font-size"] = "150%";
  
		}
	})
	
	var span = document.getElementsByClassName("CloseModalImage")[0];
	span.onclick = function() {
		Modal.style.display = "none";
	}
		
}
	
TopBarCreate()
ImageModalCreate()




