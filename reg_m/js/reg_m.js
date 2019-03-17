/**
 * @file
 * reg_m js function.
 */

(function ($) {
  Drupal.behaviors.regMButton = {
    attach : function (context, settings) {
      $('.sms-sended',context).each(function () {
        var btn = this;
        var label = $(btn).attr('value');
        var delay_label = $(btn).attr('delay_label');
        $(btn).attr('disabled',true);
        var delay = $(this).attr('delay');
        var timeinterval = setInterval(function () {
          delay--;
          $(btn).attr('value' , delay + delay_label)
          $(btn).addClass('disabled')
          $(btn).html(delay + delay_label)
          if (delay <= 0) {
            clearInterval(timeinterval);
            $(btn).removeClass('disabled')
            $(btn).html(label);
            $(btn).attr('value',label);
            $(btn).attr('disabled',false);
          }
        },1000);
      });
    }
  };
}) (jQuery);
