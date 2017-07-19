const afficherLaModale = text => {
	$('.modal-body').html(text)
	$('.modal-title').html('Mais quelle puissance !!! Tu as fixé le bug OKLM')
	$('#exampleModal').modal('show')
}


$(document).ready(function() {

	this.pgcd = (a,b) => {  
		if(a && b){
			while (a!=b) {if (a>b) a-=b; else b-=a;}  
			return a;
		}  
		return 'il manque des paramètres'
	}

	$('.pgcd').click(  function () {
		var a = $('#a').val()
		var b = $('#b').val()
		var pgcd = this.pgcd(a,b)

		afficherLaModale(pgcd)
	});


});