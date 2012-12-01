Demo::Application.routes.draw do


  root :to => 'landings#home'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#logout', as: 'logout'
  post '/sessions' => 'sessions#create'

  resources :wishlists

  
  resources :users

  resources :landings
  resources :listings

  get '/home' => 'landings#home'
  get '/listings-dev' => 'landings#listings'


end
