class Landing < ActiveRecord::Base
  # attr_accessible :title, :body
  acts_as_gmappable :process_geocoding => false
  geocoded_by :address

  after_validation :geocode

   

   
  def gmaps4rails_address
     "#{self.address}"
  end
  
  def gmaps4rails_infowindow
       "<img src=\"#{self.photo_url}\"> #{self.address} beds #{self.beds} baths #{self.bath} rent $#{self.price}"
     	
    end
  
end
