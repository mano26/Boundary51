class ListingsController < ApplicationController
  before_filter :require_admin, :only => [:create, :destroy, :update, :edit]

  def require_admin
    user = User.find_by_id(session[:user_id])
    if !user.present? || !user.admin
      redirect_to listings_url, :notice => 'Must be admin.'
    end
  end

  def index
    @listings = Listing.all
    @markers = Listing.all.to_gmaps4rails
    @wishlist = Wishlist.new

    #  @markers = '[
    # #              {"description": "Your results", "title": "", "sidebar": "", "lng": "-87.63", "lat": "41.90", "picture": "", "width": "", "height": ""},
    # #              {"lng": "-88", "lat": "42" }
    # #             ]'
    @json = Listing.all.to_gmaps4rails
      respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @listings }
    end
  end


  def address
    @address = Listing.find_by_id(params[:id])
  end
  

  def show
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
      if @listing.save
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

end
