class Api::V1::EventsController < ApplicationController

    def index
        event = Event.all
        render json: event
    end

    def update
        event = Event.find(params[:id])
        if event.update_attributes(event_params)
            render json: event
        else
            render json: event.errors, status: :unprocessable_entity
        end
    end

    def destroy
        event&.destroy
        render json: { message: 'Event deleted'}
    end

    private
        def event_params
            params.require(:event).permit(:title, :date, :time)
        end

        def Event
            @event ||= Event.find(params[:id])
        end
end
