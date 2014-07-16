class SubsectionsController < ApplicationController

  def create_form
    @subsection_id = params[:subsection_id]
    @media_type = params[:media_type]

    render 'subsections/_submit_resource_form.html.erb', layout: false
  end
end
