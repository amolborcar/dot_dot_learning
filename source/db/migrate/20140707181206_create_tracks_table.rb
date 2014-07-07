class CreateTracksTable < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.integer :user_id
      t.integer :est_completion_time
      t.boolean :is_completed
      t.string :prerequisite
    end
  end
end
