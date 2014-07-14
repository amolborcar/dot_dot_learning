class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title
      t.integer :track_id
      t.integer :user_id
      t.boolean :is_completed
      t.integer :est_completion_time
      t.timestamps
    end
  end
end
