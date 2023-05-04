$('#form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        method: 'GET',
        url: '/qrcode',
        data: {
            link: $('#linkInput').val()
        },
        success: function (data) {
            const qrImg = document.getElementById('qrCodeImg')
            const srcByJson = JSON.parse(data).link
            qrImg.setAttribute('src', srcByJson)
        }

    })

});