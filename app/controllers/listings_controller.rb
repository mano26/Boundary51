class ListingsController < ApplicationController
  before_filter :require_admin, :only => [:create, :destroy, :update, :edit]
  before_filter :require_landlord, :only => [:new, :create, :destroy, :update, :edit]
  before_filter :load_user


  def require_admin
    user = User.find_by_id(session[:user_id])
    if !user.present? || !user.admin
      redirect_to listings_url, :notice => 'Must be admin.'
    end
  end
  
  def require_landlord
    user = User.find_by_id(session[:user_id])
    if !user.present? || !user.landlord
      redirect_to listings_url, :notice => "Must be landlord."
    end
  end


  def index
    search = Geocoder.search(params[:search])
    
    @wishlist = Wishlist.new

    @map_options = { "type" => "ROADMAP", 'detect_location' => true , "zoom" => 12, "auto_adjust" => false,'center_on_user' => false}

    if search.present?
      @location = search.first.geometry["location"]

      @listings = Listing.near(params[:search], 5)

      # @listings = Listing.search(@location["lat"], @location["lng"])
      @markers = @listings.to_gmaps4rails

      @map_options['center_latitude'] = @location["lat"]
      @map_options['center_longitude'] = @location["lng"]
    else
      @listings = Listing.all #find the lat/lng from the browser
      @markers = @listings.to_gmaps4rails

      @map_options['center_on_user'] = true
      @map_options['detect_location'] = true
      @map_options['auto_adjust'] = true
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @listings }
    end
  end

  def address
    @address = Listing.find_by_id(params[:id])
  end
  

  def show
    @wishlist = Wishlist.new
    @listing = Listing.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @listing }
    end
  end

  def new
    @listing = Listing.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @listing }
    end
  end

  def edit
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(params[:listing])
    
    respond_to do |format|
      if @listing.geocoded?
        format.html { redirect_to @listing, notice: 'Listing was successfully created.' }
        format.json { render json: @listing, status: :created, location: @listing }
      else
        format.html { render action: "new" }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @listing = Listing.find(params[:id])

    respond_to do |format|
      if @listing.update_attributes(params[:listing])
        format.html { redirect_to @listing, notice: 'Listing was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @listing.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy

    respond_to do |format|
      format.html { redirect_to listings_url }
      format.json { head :no_content }
    end
  end

  def load_user
        @user = User.find_by_id(session[:user_id])
  end

end
