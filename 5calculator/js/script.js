const cal = $('#calc');

function Hasil() {
    let hasil = eval(cal.val());
    cal.val(hasil);
}

$('.angka').click(function () {
    const ang = $(this);
    cal.val(cal.val() + $.trim(ang.html()));
});

$('#equal').click(function () {
    Hasil();
});

$('#hapus').click(function () {
    cal.val('')
});

$(document).keyup((e) => {
    if (e.keyCode === 13) {
        Hasil();
    }
});