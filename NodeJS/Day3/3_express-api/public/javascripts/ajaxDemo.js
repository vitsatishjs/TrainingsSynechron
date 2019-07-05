$(document).ready(function () {
    window.sessionStorage.clear();

    $.post('/authenticate', { username: 'manish', password: 'manish' },
        function (data, status) {
            if (data.token)
                window.sessionStorage.setItem('tk', data.token);
        });

    $("#getData").click(function (e) {
        e.preventDefault();
        var tk = window.sessionStorage.getItem('tk');

        $.ajax({
            url: '/users',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var tmpl = $.templates("#userTemplate");
                var html = tmpl.render(data);
                $("#ut_body").append(html);
            },
            error: function (err) {
                console.error(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('x-access-token', tk);
            }
        })
    })
});