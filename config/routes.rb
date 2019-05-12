Rails.application.routes.draw do
  root 'trips#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :trips, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :trips, only: [:index, :create] do
        resources :users, only: [:index]
      end
    end
  end
end
