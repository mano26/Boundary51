class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.string :keywords
      t.integer :attribute_id
      t.float :min_price
      t.float :max_price

      t.timestamps
    end
  end
end
