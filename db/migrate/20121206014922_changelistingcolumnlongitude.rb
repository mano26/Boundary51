class Changelistingcolumnlongitude < ActiveRecord::Migration
  def up
  change_column :listings, :longitude, :float
  end

  def down
  end
end
