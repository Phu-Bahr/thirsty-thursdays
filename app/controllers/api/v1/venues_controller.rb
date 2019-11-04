class Api::V1::VenuesController < ApplicationController

    protect_from_forgery unless: -> { request.format.json? }
  
    def index
      venue = Venue.all.order(name: :asc)
      render json: venue
    end

    def create
      venue = Venue.create!(venue_params)
      if venue
        render json:venue
      else
        render json: venue.errors
      end
    end

    def destroy
      venue&.destroy
      render json: { message: 'Venue deleted'}
    end

    private

    def venue_params
      params.permit(:name, :street, :city, :state, :zip, :telephone, :url, :venue_image)
    end

    def venue
      @venue ||= Venue.find(params[:id])
    end


end