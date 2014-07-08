class TracksController < ApplicationController
  def new
  end

  def show
    session[:track_id] = params[:id]
  end
end