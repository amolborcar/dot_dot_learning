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
    event.preventDefault()
    var formContainer = $(this).parent().parent().parent().parent().parent().find(".submit-container")
    var createSubmitArticleRequest = $.ajax({
       url: 'submitforms/add',
       type: 'GET',
       data: {media_type: "article"}
     })
    .done(function(data) {
      formContainer.append(data)
    })
    //createSubmitArticleRequest.success(appendSubmitForm)
  }

  // function appendSubmitForm(data){
  //   formContainer.append(data)
  // }

 });