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
    var resourceSectionId = $(data).data('resource-section-id')
    var numberOfSections = $('[data-section-id]').length

    for(var i=0; i<numberOfSections; i++){
      if($('[data-section-id]').eq(i).data('section-id') == resourceSectionId){
      $('[data-section-id]').eq(i).append(data)
      }
    }
  }
 });