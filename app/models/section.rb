class Section < ActiveRecord::Base
  belongs_to :track
  has_many :resources
end
