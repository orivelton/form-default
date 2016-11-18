$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var nome = $("#nome").val();
            var telefone = $("#telefone").val();            
            var email = $("#email").val();
            var message = $("#message").val();
            var firstName = nome; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    nome: nome,
                    telefone: telefone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='fechar()'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Obrigado ! Sua mensagem foi enviada, entraremos em contato o mas rápido possível. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true' onclick='fechar()'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Desculpe " + firstName + ", parece que o meu servidor de e-mail não está respondendo. Por favor, tente novamente mais tarde!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#nome').focus(function() {
    $('#success').html('');
});
