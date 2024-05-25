
$(function () {

  $("a#cam-preview").bind("click", function () {
    $.getJSON("/request_preview_switch", function (data) {

    });

    return false;
  });
});


$(function () {

  $("a#flip-horizontal").bind("click", function () {
    $.getJSON("/request_flipH_switch", function (data) {

    });
    return false;
  });

});


$(function () {

  $("a#use-model").bind("click", function () {
    $.getJSON("/request_model_switch", function (data) {

    });
    return false;
  });
});


$(function () {

  $("a#exposure-down").bind("click", function () {
    $.getJSON("/request_exposure_down", function (data) {

    });
    return false;
  });
});


$(function () {

  $("a#exposure-up").bind("click", function () {
    $.getJSON("/request_exposure_up", function (data) {

    });
    return false;
  });
});


$(function () {

  $("a#contrast-down").bind("click", function () {
    $.getJSON("/request_contrast_down", function (data) {

    });
    return false;
  });
});


$(function () {

  $("a#contrast-up").bind("click", function () {
    $.getJSON("/request_contrast_up", function (data) {

    });
    return false;
  });
});


$(function () {

  $("a#reset-cam").bind("click", function () {
    $.getJSON("/reset_camera", function (data) {

    });
    return false;
  });

});
