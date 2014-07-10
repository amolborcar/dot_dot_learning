class ResourcesController < ApplicationController
  def new
  end

  def add
    #Find section and add resource
    p "!"*100
    section_id = params[:section_id]
    p current_user.id
    Resource.create(user_id: current_user.id, section_id: params[:section_id], title: params[:title], url: params[:url])
    render :add, locals: {}, layout: false
  end
end
