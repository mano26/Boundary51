Demo::Application.routes.draw do

  resources :landings
  resources :listings

  root :to 'listings#index'

end
