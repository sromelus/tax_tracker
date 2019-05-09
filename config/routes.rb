Rails.application.routes.draw do
  root 'trips#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :new]
  resources :trips, only: [:index, :new]

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :create]
    end
  end
end
