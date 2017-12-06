function postToGoogle() {
            var childName= jQuery('input[name="nombre-alumno"]').val();
            var dateBorn= jQuery('input[name="fecha-nacimiento"]').val();
            var parentName= jQuery('input[name="nombre-padres"]').val();
            var howIsRelated= jQuery('select[name="parentesco"]').val();
            var phone= jQuery('input[name="telefono"]').val();
            var mail= jQuery('input[name="email"]').val();
            var postCode= jQuery('input[name="cpostal"]').val();
            var courseGroup= jQuery('select[name="etapa"]').val();
            var visitTime= jQuery('input[name="hora-visita"]').val();
            var visitDay= jQuery('input[name="dia-visita"]').val();

            jQuery.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSexK4WZ3hchbbBEfseeh0lFFYBZdaRjQHSa_-3l23Dto3tZ-Q/formResponse",
            data: {
                        "entry.679329922": childName,
                        "entry.451258652": dateBorn,
                        "entry.1785490238": parentName,
                        "entry.1008716410": howIsRelated,
                        "entry.1042332445": phone,
                        "entry.657495341": mail,
                        "entry.2128845925": postCode,
                        "entry.1551565558": courseGroup,
                        "entry.728631873": visitTime,
                        "entry.1850040574": visitDay
            },
            type: "POST",
            dataType: "json",
            statusCode: {
                0: function() {     
                },
                200: function() {
                }
            }
        });
}

jQuery('.wpcf7-form').submit(function(){
        postToGoogle();
        return;
});
