class Api::V1::TripsController < ApplicationController

  def index
    if current_user
      render json: {
        current_user: current_user,
        trips: serializer_trips
      }
    else
      render json: { current_user: current_user}
    end
  end

  def serializer_trips
    ActiveModel::Serializer::ArraySerializer.new(current_user.trips, each_serializer: TripSerializer)
  end


 def create
   @trip = Trip.new(miles: trip_params['miles'], net_earning: trip_params['net_earning'], user_id: current_user.id)

   if @trip.save
     render json: { current_user: current_user, trips: serializer_trips, errors: "" }
   else
     @errors = @trip.errors.full_messages.join
     render json: { current_user: current_user, trips: serializer_trips, errors: @errors }
   end
 end

   private

   def trip_params
     params.require(:trip).permit(:miles, :net_earning)
   end

end
