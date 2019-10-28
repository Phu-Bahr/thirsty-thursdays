Rails.application.routes.draw do
root 'homepage#index'

 namespace :api do
   namespace :v1 do
     resources :venues, only: [:index]
   end
 end

end
