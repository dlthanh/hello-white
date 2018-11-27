$(function() {
    var firstname = ['Nguyễn', 'Trần', 'Lê', 'Đặng', 'Vũ', 'Phạm', 'Trịnh', 'Bùi'],
        surname = ['Thị', 'Bích', 'Phương', 'Thu',],
        lastname = ['Ngọc', 'Trang', 'Minh', 'Liên', 'Hằng', 'Thúy', 'Thủy', 'Hương'],
        city = ['Hà Nội', 'TP Hồ Chí Minh', 'Đà Nẵng', 'Nam Định', 'Thái Bình', 'Hạ Long', 'Hà Nam', 'Bình Dương', 'Móng Cái', 'Ninh Bình', 'Lạng Sơn', 'Hải Phòng', 'Hải Dương'];

    var notify = setInterval(notice, 15000);
    function notice() {
        var fullname = firstname[Math.floor(Math.random() * firstname.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)] + ' ' + lastname[Math.floor(Math.random() * lastname.length)];
        var noticecity  = city[Math.floor(Math.random() * city.length)];
        $('.notify-name').text(fullname);
        $('.notify-city').text(noticecity);
        $('.notify-order').text('Đặt ' + Math.floor(Math.random() * 10 + 1) + ' hộp Hello White');
        $('.notify-time').text(Math.floor(Math.random() * 10) + ' phút trước');
        $('.notify').fadeIn(500).delay(3000).fadeOut(300);
    }

    $('.navbar-logo-mobile').click(function() {
        $('.navbar').toggle(300);
    })

    new WOW().init()
})