class Addphotourlcolumntolistings < ActiveRecord::Migration
  def up
  	add_column :listings, :photo_url, :string
  end

  def down
  end
end
