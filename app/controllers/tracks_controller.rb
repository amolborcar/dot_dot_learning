class TracksController < ApplicationController
  def new
  end

  def show
    @track = Track.find(params[:id])
    @sections = Section.where(track_id: @track.id)
  end
end