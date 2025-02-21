//ハンバーガーアイコンのクリックイベント
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".nav").removeClass("active");
  });
});

//イントロダクションの表示非表示イベント
$(function () {
  $(".introduction .tour1 .btn").click(function (e) {
    $(this).hide();
    $(".introduction .tour1 .description").css({
      height: "auto",
      overflow: "visible",
    });
  });

  $(".introduction .tour2 .btn").click(function (e) {
    $(this).hide();
    $(".introduction .tour2 .description").css({
      height: "auto",
      overflow: "visible",
    });
  });
});

//アクティビティのスライダー
$(function () {
  $(".activity .slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//アクティビティマップのモーダル
$(function () {
  $(".map .spot1 .spot-btn")
    .mouseover(function () {
      $(".map .spot1 .spot-img").show();
    })
    .mouseout(function () {
      $(".map .spot1 .spot-img").hide();
    });
  $(".map .spot2 .spot-btn")
    .mouseover(function () {
      $(".map .spot2 .spot-img").show();
    })
    .mouseout(function () {
      $(".map .spot2 .spot-img").hide();
    });
  $(".map .spot3 .spot-btn")
    .mouseover(function () {
      $(".map .spot3 .spot-img").show();
    })
    .mouseout(function () {
      $(".map .spot3 .spot-img").hide();
    });
  $(".map .spot4 .spot-btn")
    .mouseover(function () {
      $(".map .spot4 .spot-img").show();
    })
    .mouseout(function () {
      $(".map .spot4 .spot-img").hide();
    });
  $(".map .spot5 .spot-btn")
    .mouseover(function () {
      $(".map .spot5 .spot-img").show();
    })
    .mouseout(function () {
      $(".map .spot5 .spot-img").hide();
    });
});

//右下のボタン
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".fixed-btn").fadeIn();
    } else {
      $(".fixed-btn").fadeOut();
    }
  });
});
