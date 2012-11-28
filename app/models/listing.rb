# require "gmaps"

class Listing < ActiveRecord::Base
  attr_accessible :address, :available, :bath, :beds, :building_description, :cats, :city, :country, :dogs, :heat_included, :landlord_id, :latitude, :laundry, :longitude, :parking, :price, :showing_instructions, :state, :unit_description, :unit_number, :utilities_included, :zip, :photo_url


  has_many :wishlists
  has_many :users, :through => :wishlists

  acts_as_gmappable :process_geocoding => false
  geocoded_by :address

  after_validation :geocode

   
def self.search(search)
  if search
   find(:all, :conditions => ['name Like ?', "%#{params[:search]}"])
  else
    find(:all)
  end
end
   
  def gmaps4rails_address
     "#{self.address}"
  end
  
  def gmaps4rails_infowindow
       "<img src=\"#{self.photo_url}\"> #{self.address} beds #{self.beds} baths #{self.bath} rent $#{self.price}"
     	
    end
  
end 