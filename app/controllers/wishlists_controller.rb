class WishlistsController < ApplicationController

#before_filter :must_be_user

	#def must_be_user
	#@user = User.find_by_id(session[:user_id])
  #  if !user.present?
  #    redirect_to listings_url, :notice => 'Must be signed in.'
  #	end
	#end

	def create
    @wishlist = Wishlist.new(params[:wishlist])

    respond_to do |format|
      if @wishlist.save
        format.html { redirect_to "/users/#{session[:user_id]}", notice: 'Listing was successfully added to your wishlist.' }
        format.json { render json: @wishlist, status: :created, location: @wishlist }
      else
        format.html { render action: "new" }
        format.json { render json: @wishlist.errors, status: :unprocessable_entity }
      end
    end
  end

	def new
	
	end

 def destroy
    @wishlist = Wishlist.find(params[:id])
    @wishlist.destroy

    respond_to do |format|
      format.html { redirect_to "/users/#{session[:user_id]}" }
      format.json { head :no_content }
    end
  end
end