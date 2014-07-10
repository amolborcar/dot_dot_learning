$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  // var post
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
    debugger
    //resource_to_append = Resource.where
  }

//   var updateVoteCount = function(data) {

//     // Find ID of parent, then drill down to class, then change inner HTML of class
//     $('#'+ data['id']).find(".points").html(data['points'])
//     // Change color of voting button
//     $(post).css('color','red')
//   }

//   var appendNewPost = function(data) {
//     $(".post-container").append(data);
//   }

//   $(".post-container").on('click', '.vote-button', function(event){
//     event.preventDefault();
//     post = event.target;
//     var voteRequest = $.ajax ({
//       url: event.target.href,
//       type: 'GET'

//     })

//     voteRequest.done(updateVoteCount)
//     voteRequest.fail(function(){console.log("Failure!")})

//   })

//   $("#posts").on("submit", function(event){
//     event.preventDefault();

//     var createRequest = $.ajax({
//       url: '/posts',
//       type: 'POST',
//       data: $(event.target).serialize()
//     })

//     createRequest.done(appendNewPost);

//     createRequest.fail(function(data) {
//       $(".post-container").append("Please enter a title for your post!");
//     })
//   })

 });