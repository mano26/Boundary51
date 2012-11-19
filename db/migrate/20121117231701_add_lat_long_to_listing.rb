class AddLatLongToListing < ActiveRecord::Migration
  def up
  	add_column :listings, :lat, :float
  	add_column :listings, :lng, :float

  end

  def down

  end
end
