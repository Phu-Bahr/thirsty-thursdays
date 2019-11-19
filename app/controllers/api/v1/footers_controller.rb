class Api::V1::FootersController < ApplicationController

    def index
        footer_info = Footer.all
        render json: footer_info
    end

end
