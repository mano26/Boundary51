# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121115231943) do

  create_table "landings", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "listings", :force => true do |t|
    t.string   "address"
    t.string   "unit_number"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.string   "country"
    t.string   "latitude"
    t.string   "longitude"
    t.date     "available"
    t.float    "bath"
    t.text     "building_description"
    t.integer  "landlord_id"
    t.string   "laundry"
    t.string   "parking"
    t.boolean  "cats"
    t.boolean  "dogs"
    t.integer  "price"
    t.text     "showing_instructions"
    t.text     "unit_description"
    t.text     "utilities_included"
    t.boolean  "heat_included"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
    t.string   "beds"
  end

end
