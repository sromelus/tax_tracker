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

  def show
    if current_user
      render json: {
        current_user: current_user,
        trip: current_user.trips.find(params[:id])
      }
    else
      render json: { current_user: current_user}
    end
  end

  def destroy
    @trip = current_user.trips.find(params[:id])
    
    if @trip.destroy
      render json: { message: "Trip deleted successfully", errors: "" }
    else
      @errors = @trip.errors.full_messages.join
      render json: { current_user: current_user, trips: serializer_trips, errors: @errors }
    end
  end


  def update
    @trip = current_user.trips.find(params[:id])

    if @trip.update(miles: trip_params['miles'], gross_income: trip_params['gross_income'], maintenance: trip_params['maintenance'], gas: trip_params['gas'], insurance: trip_params['insurance'], food: trip_params['food'], user_id: current_user.id)
      render json: { message: "Trip updated successfully", errors: "" }
    else
      @errors = @trip.errors.full_messages.join
      render json: { current_user: current_user, trips: serializer_trips, errors: @errors }
    end
  end


  def serializer_trips
    ActiveModel::Serializer::CollectionSerializer.new(current_user.trips.order(created_at: :desc), each_serializer: TripSerializer)
  end


  def create
     @trip = Trip.new(miles: trip_params['miles'], gross_income: trip_params['gross_income'], maintenance: trip_params['maintenance'], gas: trip_params['gas'], insurance: trip_params['insurance'], food: trip_params['food'], user_id: current_user.id)

     if @trip.save
       render json: { message: "New trip saved successfully", errors: "" }
     else
       @errors = @trip.errors.full_messages.join
       render json: { current_user: current_user, trips: serializer_trips, errors: @errors }
     end
  end

     private

     def trip_params
       params.require(:trip).permit(:miles, :gross_income, :maintenance, :gas, :insurance, :food)
     end

  end
