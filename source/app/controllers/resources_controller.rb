class ResourcesController < ApplicationController
  def new
  end

  def add
    #Find section and add resource
    p "!"*100
    val = params[:section_id]
    p val
  end
end