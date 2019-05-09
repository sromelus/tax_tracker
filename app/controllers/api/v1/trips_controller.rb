class Api::V1::TripsController < ApplicationController
  def index
    if current_user
      render json: {
        current_user: current_user,
        trips: current_user.trips
      }
    else
      render json: { current_user: current_user}
    end
  end
end
