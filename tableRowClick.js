$(document).ready(function() {    
    $('tbody').on('click', 'tr', function() {
    	// Set trId as the message Id
        var trId = $(this).closest('tr').prop('id');
        // Use Id to request "message.get"
        getMessage(trId);
        return true;
    });
});
