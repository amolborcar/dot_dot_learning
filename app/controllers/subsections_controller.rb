class SubsectionsController < ApplicationController

  def create_form
    if params[:media_type] == "article"
      render 'subsections/_submit_article_form.html.erb'
    end
  end
end
