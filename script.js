var corpus = new Array();
var min = 1930, max = 1990;
if ( $("box".value === "") ){ 
		$("#searchButton").attr( 'href', '#ClickGenerateFirst'); 
}
$.get('corpus.txt', function(data){ 
		bigOlCorpus = data.split('\n'); 
});
function generateRandomSample() {
		var listOfWords = bigOlCorpus;
		var finalNumber = Math.floor(Math.random() * (max - min) + min);
		var finalWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
		document.getElementById("box").value = finalWord + ' ' + finalNumber;
		$( "#searchButton" ).attr( 'href', 'https://www.youtube.com/results?search_query=' + finalWord + '+' + finalNumber).attr( 'target', '_blank');
};
