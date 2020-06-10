Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :trips, only: [:index]

  get '/trips', to: 'home#index'
  get '/trips/:id', to: 'home#index'
  get '/trips/new', to: 'home#index'
  get '/trips/:id/update', to: 'home#index'

  # get '/trips/reports/byweeks', to: 'trips#index'
  # get '/trips/reports/bymonths', to: 'trips#index'
  # get '/trips/reports/byyears', to: 'trips#index'
  get '/aboutUs', to: 'abouts#index'
  get 'contact', to: 'contacts#index'

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :create] do
        resources :users, only: [:index]
      end
    end
  end
end
