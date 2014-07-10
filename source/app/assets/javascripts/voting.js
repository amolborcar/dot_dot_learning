$(document).ready(function() {

  $(document).on("click", ".upvote", upvoteClicked)
  // ToDo: Add CSRF token

  function upvoteClicked(event){
    var resourceId = $(event.target).parents('.resource-body').data('resource-id')
    $(this).siblings('.resource-content').find('a').css({color: '#27ae60'})
    var createResourceRequest = $.ajax({
       url: '/resources/upvote/:id',
       type: 'POST',
       data: {resource_id: resourceId}
     })
    //createResourceRequest.success(appendNewResource)
  }
 });