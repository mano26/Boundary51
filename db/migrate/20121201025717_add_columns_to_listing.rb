class AddColumnsToListing < ActiveRecord::Migration
  def up
  	add_column :listings, :in_unit_laundry, :boolean
  	add_column :listings, :on_site_laundry, :boolean
  	add_column :listings, :parking_available, :boolean
  	add_column :listings, :parking_description, :text
  end

  def down
  	remove_column :listings, :parking
  	remove_column :listings, :laundry
  end
end
