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
    var resourceSubsectionId = $(data).data('resource-subsection-id')
    var numberOfSubsections = $('[data-subsection-id]').length

    for(var i=0; i<numberOfSubsections; i++){
      if($('[data-subsection-id]').eq(i).data('subsection-id') == resourceSubsectionId){
      $('[data-subsection-id]').eq(i).append(data)
      }
    }
  }
 });