Rails.application.routes.draw do
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  
  namespace :api do
    namespace :v1 do
      get 'venues/index'
      post 'venues/create'
      put 'venues/update/:id', to: 'venues#update'
      delete '/destroy/:id', to: 'venues#destroy'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :jumbotrons, only: [:index, :update]
      resources :footers, only: [:index, :update]
      resources :companies, only: [:index, :update]
      resources :announcements, only: [:index, :update]
      resources :events, only: [:index, :create, :update, :destroy]
      resources :registrations, only: [:create]
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
