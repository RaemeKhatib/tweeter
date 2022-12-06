$(document).ready(function() {
  $('textarea.input').on('keyup', onChange);

});

const onChange = function(e) {
  const input = $(this);
  const text = input.val();

  // const text = $('.input').val();
  const remaining = 140 - text.length;
  const form = input.closest('output');
  const output = form.fund('output');

  output.text(remaining);
  if (remaining < 0) {
    output.addClass('red');
  } else {
    output.removeClass('red');
  }

}

