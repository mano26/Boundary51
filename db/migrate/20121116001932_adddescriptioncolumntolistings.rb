class Adddescriptioncolumntolistings < ActiveRecord::Migration
  def up
  	add_column :listings, :description, :text

  end

  def down
  end
end
