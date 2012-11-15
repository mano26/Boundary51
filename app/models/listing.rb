class Listing < ActiveRecord::Base
  attr_accessible :address, :available, :bath, :beds, :building_description, :cats, :city, :country, :dogs, :heat_included, :landlord_id, :latitude, :laundry, :longitude, :parking, :price, :showing_instructions, :state, :unit_description, :unit_number, :utilities_included, :zip
end
