Demo::Application.routes.draw do


  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#logout', as: 'logout'
  post '/sessions' => 'sessions#create'

  
  resources :users

  resources :landings
  resources :listings

  root to: 'listings#index'

end
