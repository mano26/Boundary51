# require "gmaps"

class Listing < ActiveRecord::Base
  attr_accessible :address, :available, :bath, :beds, :building_description, :cats, :city, :country, :dogs, :heat_included, :landlord_id, :latitude, :laundry, :longitude, :parking, :price, :showing_instructions, :state, :unit_description, :unit_number, :utilities_included, :zip, :photo_url, :in_unit_laundry, :on_site_laundry, :parking_available


  has_many :wishlists
  has_many :users, :through => :wishlists

  acts_as_gmappable :process_geocoding => false
  geocoded_by :address

  after_validation :geocode

  validate :ensure_landlord_cant_dupe
  # validate :verify_address


  def ensure_landlord_cant_dupe
  if Listing.where(:address => self.address, :landlord_id => self.landlord_id, :unit_number => self.unit_number).exists?
    errors.add(:base, "Can't add the same listing twice!")
    end
  end

  # def verify_address
  #       if latitude.present? && longitude.present? 
  #         else
  #        errors.add(:base, "Must add real address!")
  #       end
  #     end
   
def self.search(search) 
  if search
   find(:all, :conditions => ['address Like ?', "%#{search}%"])
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