$(document).ready(function() {

  $(document).on("submit", ".submit-resource-form", submitClicked)
  // ToDo: Add CSRF token
  function submitClicked(event){
    event.preventDefault()
    var createResourceRequest = $.ajax({
       url: '/resources/add',
       type: 'POST',
       data: $(event.target).serialize()
     })
    createResourceRequest.success(appendNewResource)
  }

  function appendNewResource(data){
    // This is a heinous way to append, but getting data to add to
    // the correct section was suprisingly difficult
    // TODO: refactor to be simpler
    var resourceSectionId = $(data).find("span").html()
    var numberOfSections = $(document).find('.section-section-id').length

    for(var i=0; i<numberOfSections; i++){
      if($(document).find('.section-section-id')[i].innerHTML == resourceSectionId){
        $(document).find('.section-section-id').parent().eq(i).append(data)
      }
    }
  }
 });