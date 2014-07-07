class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.integer :user_id
      t.integer :section_id
      t.ingeger :track_id # may not need this
      t.string :title
      t.string :url
      t.string :content # if its a tip
      t.string :type # the type of res, ex "article", "tip" "video", "tutorial", etc
      t.integer :votes
      t.boolean :is_completed
      t.timestamps
    end
  end
end
