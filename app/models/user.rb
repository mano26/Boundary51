class User < ActiveRecord::Base
  attr_accessible :admin, :email, :name, :password, :password_confirmation

  has_secure_password

  has_many :listings
end
