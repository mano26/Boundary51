class Changelistinglatitudecolumn < ActiveRecord::Migration
  def up
  change_column :listings, :latitude, :float
  end

  def down
  end
end
