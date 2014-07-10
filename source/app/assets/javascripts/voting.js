$(document).ready(function() {

  $(document).on("click", ".upvote", upvoteClicked)
  // ToDo: Add CSRF token

  function upvoteClicked(event){
    var resourceId = $(event.target).parents('.resource-body').find('.resource-resource-id').find('span')[0].innerHTML
    $(this).siblings('.resource-content').find('a').css({color: '#27ae60'})
    var createResourceRequest = $.ajax({
       url: '/resources/upvote/:id',
       type: 'POST',
       data: {resource_id: resourceId}
     })
    //createResourceRequest.success(appendNewResource)
  }

  function addVote(data){
    debugger
    var resourceSectionId = $(data).find(".resource-section-id").find("span").html()
    var numberOfSections = $(document).find('.section-section-id').length

    for(var i=0; i<numberOfSections; i++){
      if($(document).find('.section-section-id')[i].innerHTML == resourceSectionId){
        $(document).find('.section-section-id').parent().eq(i).append(data)
      }
    }
  }
 });