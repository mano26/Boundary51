class Search < ActiveRecord::Base
  attr_accessible :attribute_id, :keywords, :max_price, :min_price
end
