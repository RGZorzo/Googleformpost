function postToGoogle() {

            //Getting filled input's information and storing into custom variables
            var email= jQuery('input[name="email-field"]').val();
            var name = jQuery('input[name="name-field"]').val();
            var address= jQuery('input[name="address-field"]').val();

            jQuery.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSexK4WZ3hchbbBEfseeh0lFFYBZdaRjQHSa_-3l23Dto3tZ-Q/formResponse",
            data: {
                        //Posting web form info to Google after inspecting Google form's inputs getting its names
                        //Format is allways entry.xxxxxxxxx no mater input type
                        "entry.xxxxxxxxx": email,
                        "entry.xxxxxxxxx": name,
                        "entry.xxxxxxxxx": address
            },
            type: "POST",
            dataType: "json",
            statusCode: {
                //Here you can fire custom events depending on submitting success
                0: function() {     
                },
                200: function() {
                }
            }
        });
}

//Attach previous function on form submit.
//You could even prevent default behaviour and wait for google form's response before doing default submit
jQuery('.whatever-form').submit(function(){
        postToGoogle();
        return;
});
