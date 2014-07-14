class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.integer :user_id
      t.integer :subsection_id
      t.integer :section_id
      t.integer :track_id # may not need this
      t.string :title
      t.string :url
      t.string :content # if its a tip
      t.string :media_type, :default => "article" # the type of res, ex "article", "tip" "video", "tutorial", etc
      t.integer :votes, :default => 0
      t.boolean :is_completed, :default => false
      t.timestamps
    end
  end
end
