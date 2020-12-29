// スクリーン
jQuery(function ($) {
    $('#top').bgSwitcher({
        images: ['./img/header1.jpg', './img/header2.jpg', './img/header3.jpg'], // 切り替える背景画像
        Interval: 3000, //切り替えの間隔 1000=1秒
        start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
        loop: true, //切り替えをループする
        shuffle: false, //背景画像の順番をシャッフルする
        effect: "fade", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
        duration: 1000, //エフェクトの時間 1000=1秒
        easing: "swing", //エフェクトのイージング 
    });

    // ドロワーメニュー
    $('.navbar_toggle').on('click', function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu').toggleClass('disappear');
    });

    $('.drawer-item').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar_toggle').toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu').toggleClass('disappear');
    });
});