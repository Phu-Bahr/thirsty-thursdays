Rails.application.routes.draw do
 root 'venues#index'

 namespace :api do
   namespace :v1 do
     resources :venues, only: [:index]
   end
 end

end
