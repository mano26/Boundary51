# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

listings = Listing.create([{address: '1048 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None' , unit_description: 'Charming 1 bedroom with den...', photo_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBNS8KI2KtcEcMIpo_fTHpsKaS6m55d1MbJtR2kIVdasRacAdpPg"},
						{address: '1048 W Armitage', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None', unit_description: 'Vintage walk-up', photo_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRN1j0PKciluQO4p1LaDu0PP5iAnknha1D09jwdxynAwpiVwEm3" },
						{address: '2101 N Seminary', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None', unit_description: 'Close to Wrigley Field!', photo_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJSIN5Rawf0IV5gyrp_47Er_JZMF1seMgaU_P3X6M0BF9HALh-" },
						{address: '1050 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None', unit_description: 'Recent Remodel...', photo_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-mn5bA1wLqL4B19ZXAZl7itLW5BaDtgLEy9atYw1im0Fv6UER"},
						{address: '1030 W Dickens', unit_number: '12', city: 'Chicago', state: 'IL', country: 'United States', zip: '60614',  beds: '1', bath: '1',  available: '10/1/12', price: '1225', laundry: 'In Unit', cats:true, dogs:false, parking: 'None', unit_description: 'Duplex, private deck!!', photo_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRw5PrEYU5aSFHjvdCRMOVm_WWKnwyBkHwDkoth1rCTjAatyGKa"}])


#  listings.each do |listing_hash|
# end