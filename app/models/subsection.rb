class Subsection < ActiveRecord::Base
  belongs_to :section
  has_many :resources
end
