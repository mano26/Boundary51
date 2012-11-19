class SessionsController < ApplicationController

	def create
		user = User.find_by_email(params[:email])
		if user && user.authenticate(params[:password])

			session[:user_id] = user.id
			redirect_to listings_url
		else
			render 'new'
		end

	end

	def logout
		session['user_id'] = nil
		redirect_to listings_url
	end


	def new

	end

end

