$(document).ready(function() {    
    $('tbody').on('click', 'tr', function() {
    	// var the_content = .cloest('p').find("id").val();
        var trId = $(this).closest('tr').prop('id');
        alert(trId);
        console.log(trId);
        return false;
    });
});
