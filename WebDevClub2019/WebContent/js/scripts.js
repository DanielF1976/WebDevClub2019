window.onload = function () {

		document.getElementsByClassName("mobilemenutrigger")[0].addEventListener("click", mobileMenuFunc);
		document.getElementsByClassName("exit")[0].addEventListener("click", closeFunc);
		document.getElementById("mobilemenu").addEventListener("click", closeFunc);
		document.getElementById("hero").className = "fadeinClass";

		var links = document.querySelectorAll("nav a");

		for(let i = 0; i < links.length; i++)
		{
			links[i].addEventListener("click", function(event)
					{
				return function()
				{
					jsScroll(event);
					};
				}(event));
	}
}

