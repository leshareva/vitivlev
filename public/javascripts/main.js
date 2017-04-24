$(document).ready(function() {

    $("#submit_btn").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var comment = $("#comment").val();

        if (email.length == 0) {
            $("#error2").append("Укажите почту");
        } else if (name.length == 0) {
            $("#error1").append("Укажите имя");
        } else {
            firebase.database().ref('requests/sketching').push(obj).then(function () {
                $('#modal').modal()
            }).catch(function (err) {
                $("#error3").append("Что-то пошло не так")
            })
        }

        var obj = {
            email: email,
            name: name,
            comment: comment,
            timestamp: Math.floor(Date.now() / 1000)
        }

    });
});



