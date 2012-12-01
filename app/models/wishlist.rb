class Wishlist < ActiveRecord::Base
  attr_accessible :listing_id, :user_id

  belongs_to :user
  belongs_to :listing

  validates_presence_of :user
  
end
