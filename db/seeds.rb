# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

listings = Listing.create([{address: '1048 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None' },
						{address: '1048 W Armitage', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None' },
						{address: '2101 N Seminary', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None' },
						{address: '1050 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None'},
						{address: '1030 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None' }])
