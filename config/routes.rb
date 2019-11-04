Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'venues/index'
      post 'venues/create'
      delete '/destroy/:id', to: 'venues#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
