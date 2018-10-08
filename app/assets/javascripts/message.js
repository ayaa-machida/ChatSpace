$(function(){
  function buildHTML(message){
    var html_common = `<div class= "messagelist">
                        <div class= "messagelist__create">
                          <div class= "messagelist__name">
                            ${message.user_name}
                          </div>
                          <div class= "messagelist__post_date">
                            ${message.created_at}
                          </div>
                        </div>
                        <div class= "messagelist__comment">
                          <p class="lower-message__content">
                            ${message.content}
                          </p>`
    if(message.image.url === null ){
      var html = html_common + `</div>
                </div>`
      return html;
    }else{
      var html = html_common + `<img class= "lower-message__image", src= ${message.image.url}>
                  </div>
                </div>`
      return html;
    }
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messageslists').append(html);
      $('.form__message').val('');
      $('.hidden').val('');
      $('.form__submit').prop('disabled', false);
      $('.messageslists').animate({scrollTop:$('.messageslists')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled', false);
    })
  })
});
