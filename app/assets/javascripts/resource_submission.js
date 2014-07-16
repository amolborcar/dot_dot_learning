$(document).ready(function() {

  $(document).on("submit", ".submit-resource-form", submitClicked)
  $(this).show()
  function submitClicked(event){
    event.preventDefault()
    var createResourceRequest = $.ajax({
       url: '/resources/add',
       type: 'POST',
       data: $(event.target).serialize()
     })
    createResourceRequest.success(appendNewResource)
    $(this).parent().parent().find(".btn-group").show()
    $(this).hide()
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
  $(document).on("click", ".add-video", addVideoClicked)
  $(document).on("click", ".add-interactive", addInteractiveClicked)

  // Using these functions to route to appendResource as params can't be passed in callbacks
  // This is more DRY, I promise
  function addArticleClicked(event){
    addResource("article", this, event)
  }
  function addVideoClicked(event){
    addResource("video", this, event)
  }
  function addInteractiveClicked(event){
    addResource("interactive", this, event)
  }

  function addResource(mediaType, location, event) {
    event.preventDefault()
    var dropdownButton = $(location).closest(".btn-group")
    var formContainer = $(location).parent().parent().parent().parent().parent().find(".submit-container")
    var subsectionId = $(location).parent().parent().parent().parent().parent().find('.subsection-container').data('subsection-id')

    var createSubmitArticleRequest = $.ajax({
       url: 'submitforms/add',
       type: 'GET',
       data: {media_type: mediaType, subsection_id: subsectionId}
     })
    .done(function(data) {
      dropdownButton.hide()
      formContainer.append(data)
    })
  }
 });