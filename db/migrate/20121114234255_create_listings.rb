class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :address
      t.string :unit_number
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.string :latitude
      t.string :longitude
      t.date :available
      t.float :bath
      t.text :building_description
      t.integer :landlord_id
      t.string :laundry
      t.string :parking
      t.boolean :cats
      t.boolean :dogs
      t.integer :price
      t.text :showing_instructions
      t.text :unit_description
      t.text :utilities_included
      t.boolean :heat_included

      t.timestamps
    end
  end
end
