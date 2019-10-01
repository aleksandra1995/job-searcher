Rails.application.routes.draw do
  resources :jobs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/login', to: 'auth#login'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
  get '/jobs', to: 'jobs#index'
end
