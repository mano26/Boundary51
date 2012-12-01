class User < ActiveRecord::Base
  attr_accessible :email, :name, :password, :password_confirmation, :landlord

  has_secure_password

  has_many :listings
  has_many :wishlists
  has_many :listings, :through => :wishlists

end

