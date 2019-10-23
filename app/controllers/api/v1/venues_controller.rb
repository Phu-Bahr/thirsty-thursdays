class Api::V1::VenuesController < ApplicationController

    protect_from_forgery unless: -> { request.format.json? }
  
    def index
      render json: Venue.all
    end

end