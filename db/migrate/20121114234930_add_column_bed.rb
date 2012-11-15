class AddColumnBed < ActiveRecord::Migration
  def up
  	change_table :listings do |t|
  		t.string :beds
  	end
  end

  def down
  end
end
