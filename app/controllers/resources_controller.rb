class ResourcesController < ApplicationController
  def new
  end

  def add
    #Find section and add resource
    subsection_id = params[:subsection_id]
    p current_user.id
    resource = Resource.create(user_id: current_user.id, subsection_id: params[:subsection_id], title: params[:title], url: params[:url])
    render :_show_resource, locals: {resource: resource}, layout: false
  end

  def upvote
    p "!"*100
    resource_to_add_vote = Resource.find_by_id(params[:resource_id])
    vote_count = resource_to_add_vote.votes + 1
    resource_to_add_vote.update(votes: vote_count)
    redirect_to '#'
  end

end
