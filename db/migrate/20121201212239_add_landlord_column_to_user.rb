class AddLandlordColumnToUser < ActiveRecord::Migration
  def up
    add_column :users, :landlord, :boolean
  end
end
