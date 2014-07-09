$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  // var post
  $(document).on("click", ".submit-button", foo)

  function foo(event){
    console.log(event.target)
    console.log("button clicked")
    alert("submit button pressed!")
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