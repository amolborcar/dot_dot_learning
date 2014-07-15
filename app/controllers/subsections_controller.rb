class SubsectionsController < ApplicationController

  def create_form
    @subsection_id = params[:subsection_id]

    if params[:media_type] == "article"
      render 'subsections/_submit_article_form.html.erb', layout: false
    end
  end
end
