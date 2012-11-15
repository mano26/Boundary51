require 'test_helper'

class ListingsControllerTest < ActionController::TestCase
  setup do
    @listing = listings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:listings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create listing" do
    assert_difference('Listing.count') do
      post :create, listing: { address: @listing.address, available: @listing.available, bath: @listing.bath, building_description: @listing.building_description, cats: @listing.cats, city: @listing.city, country: @listing.country, dogs: @listing.dogs, heat_included: @listing.heat_included, landlord_id: @listing.landlord_id, latitude: @listing.latitude, laundry: @listing.laundry, longitude: @listing.longitude, parking: @listing.parking, price: @listing.price, showing_instructions: @listing.showing_instructions, state: @listing.state, unit_description: @listing.unit_description, unit_number: @listing.unit_number, utilities_included: @listing.utilities_included, zip: @listing.zip }
    end

    assert_redirected_to listing_path(assigns(:listing))
  end

  test "should show listing" do
    get :show, id: @listing
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @listing
    assert_response :success
  end

  test "should update listing" do
    put :update, id: @listing, listing: { address: @listing.address, available: @listing.available, bath: @listing.bath, building_description: @listing.building_description, cats: @listing.cats, city: @listing.city, country: @listing.country, dogs: @listing.dogs, heat_included: @listing.heat_included, landlord_id: @listing.landlord_id, latitude: @listing.latitude, laundry: @listing.laundry, longitude: @listing.longitude, parking: @listing.parking, price: @listing.price, showing_instructions: @listing.showing_instructions, state: @listing.state, unit_description: @listing.unit_description, unit_number: @listing.unit_number, utilities_included: @listing.utilities_included, zip: @listing.zip }
    assert_redirected_to listing_path(assigns(:listing))
  end

  test "should destroy listing" do
    assert_difference('Listing.count', -1) do
      delete :destroy, id: @listing
    end

    assert_redirected_to listings_path
  end
end
