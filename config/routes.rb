Demo::Application.routes.draw do


  root :to => 'Listings#index'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#logout', as: 'logout'
  post '/sessions' => 'sessions#create'

  resources :wishlists

  
  resources :users

  resources :landings
  resources :listings


end
