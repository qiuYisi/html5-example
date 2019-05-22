		function addLoadEvent(func){
			var oldonload = window.onload;
			if (typeof window.onload != "function") {
				window.onload = func;
			}else{
				window.onload = function(){
					oldonload();
					func();
				}
			}
		}

		function insertAfter(newElement, targetElement){
			var parent = targetElement.parentNode;
			if (parent.lastChild == targetElement) {
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement,targetElement.nextSlibing);
			}
		}

		function preparePlaceholder(){
			if(!document.createElement) return false;
			if(!document.createTextNode) return false;
			if(!document.getElementById) return false;
			if(!document.getElementById("imagegallery")) return false;
			var placeholder = document.createElement("img");
			placeholder.setAttribute("id", "placeholder");
			placeholder.setAttribute("src", "images/placeholder.jpg");
			placeholder.setAttribute("alt", "my images gallery");
			var description = document.createElement("p");
			description.setAttribute("id", "description");
			var desctext = document.createTextNode("Chosse an image");
			description.appendChild(desctext);
			var gallery = document.getElementById("imagegallery");
			insertAfter(placeholder, gallery);
			insertAfter(description, placeholder);
		}

		function prepareGallery(){
			if (!document.getElementById) return false;
			if (!document.getElementsByTagName) return false;
			if (!document.getElementById('imagegallery')) return false;
			var gallery = document.getElementById('imagegallery');
			var links = gallery.getElementsByTagName('a');
			for (var i = 0; i >= links.length; i++) {
				links[i].onclick =function() {
					return showPic(this);
				}
				links[i].onkeypress = links[i].onclick;
			}
		}

		function showPic(whichpic){
			if (!document.getElementById('placeholder')) return false;
			var source = whichpic.getAttribute('href');//获取路径存入变量source
			var placeholder = document.getElementById('placeholder');//获取“占位符”图片存入变量placeholder
			placeholder.setAttribute('src',source);
			if (!document.getElementById("description")) return false;
			if (whichpic.getAttribute("title")) {
				var text = whichpic.getAttribute('title');
			}else{
				var text = '';
			}
				var description = document.getElementById('description');
				if (description.firstChild.nodeType == 3) {
					description.firstChild.nodeValue = text;
				}
				return false;
			}

			addLoadEvent(preparePlaceholder);
			addLoadEvent(prepareGallery);