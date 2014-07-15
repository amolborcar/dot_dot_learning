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

  $(document).on("click", ".add-article", addArticleClicked)

  function addArticleClicked(event){
    appendResource("article", this, event)
  }

  function appendResource(mediaType, location, event) {
    event.preventDefault()
    var dropdownButton = $(location).closest(".btn-group")
    var formContainer = $(location).parent().parent().parent().parent().parent().find(".submit-container")
    var subsectionId = $(location).parent().parent().parent().parent().parent().find('.subsection-container').data('subsection-id')
    debugger
    var createSubmitArticleRequest = $.ajax({
       url: 'submitforms/add',
       type: 'GET',
       data: {media_type: mediaType, subsection_id: subsectionId}
     })
    .done(function(data) {
      dropdownButton.hide()
      formContainer.append(data)
    })
    //createSubmitArticleRequest.success(appendSubmitForm)
  }

  // function appendSubmitForm(data){
  //   formContainer.append(data)
  // }

 });