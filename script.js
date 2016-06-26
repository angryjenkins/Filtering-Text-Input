var $SearchField, $rows, $tables, $tabs;

$(document).ready(function(){

	// MODALS
	$('.fn-add-an-adtool-type-modal').click(function(e){
		e.preventDefault();
		$('#add-an-adtool-type-modal').modal('show');
	});
	$('.fn-add-an-adtool-type-cancel').click(function(e){
		e.preventDefault();
		//$('#add-an-adtool-type').removeClass('hidden').slideToggle();
		$('#add-an-adtool-type-modal').modal('hide');
	});
	$('#add-an-adtool-type-modal').on('hidden.bs.modal', function() {
		document.getElementById("add-an-adtool-type-modal-form").reset();
	});

	// FITLERING!!!
	$SearchField = $('#query');
	$targets = $('.wordTarget');

	// var debounced_tableFilter = _.debounce(wordGun, 200);
	// var throttle_tableFilter = _.throttle(wordGun, 500);
	$SearchField.keyup(function(){
		wordGun(this);
	});
});

function wordGun(node){
	console.log('wordGun called');

	console.log($SearchField.val());

	var val = '^(?=.*\\b' + $.trim($(node).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        // search_results = [],		//debugging purposes only, this can be removed since counters are now keeping track of results.
        targetCounter = 0,
        text;

	if($targets.length < 1){
		alert("Level Clear!");
	} else {
		$targets.each(function(){
			var targetWord = $(this).text();

			var text = $(this).text().replace(/\s+/g, ' ');

			var inputSoFar = $SearchField.val().length;

			if(reg.test(text) === true){
				targetCounter++;
				console.log('Targetting Word, ... %s', targetWord);
				console.log('Letters Typed: %s', inputSoFar);

				$(this).removeClass('hidden'); 				// REVEAL TARGET WORD

				// todo: make the individual letters bold as you type.

				// this marks the completion of a typed word and
				if($SearchField.val().toLowerCase() == targetWord.toLowerCase()){
					alert("You typed " + targetWord);
					$SearchField.val('');
					$(this).closest('.wordTarget').remove();


				}

			} else {
				$(this).addClass('hidden');
			}
		});
	}

	if (targetCounter > 0) {
		console.log("%s Current Targets", targetCounter);
	}
};