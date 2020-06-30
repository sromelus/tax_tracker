class UserPhotosController < ApplicationController

  def index
    # @image = UserPhoto.first
    # .recreate_versions!(:thumb)
    if current_user
      render json: {
        current_user: current_user,
        image: UserPhoto.first
        # trips: serializer_trips
      }
    else
      render json: { current_user: current_user}
    end
  end

  def new
   @image = UserPhoto.new
  end
  #
  # def show
  #   if current_user
  #     render json: {
  #       current_user: current_user,
  #       trip: current_user.trips.find(params[:id])
  #     }
  #   else
  #     render json: { current_user: current_user}
  #   end
  # end
  #
  # def destroy
  #   @trip = current_user.trips.find(params[:id])
  #
  #   if @trip.destroy
  #     render json: { message: "Trip deleted successfully", errors: "" }
  #   else
  #     @errors = @trip.errors.full_messages.join
  #     render json: { current_user: current_user, errors: @errors }, status: 400
  #   end
  # end
  #
  #
  # def update
  #   @trip = current_user.trips.find(params[:id])
  #
  #   if @trip.update(miles: trip_params['miles'], gross_income: trip_params['gross_income'], maintenance: trip_params['maintenance'], gas:  trip_params['gas'], insurance: trip_params['insurance'], food: trip_params['food'], user_id: current_user.id)
  #     render json: { message: "Trip updated successfully", errors: "" }
  #   else
  #     @errors = @trip.errors.full_messages
  #     render json: { current_user: current_user, trips: serializer_trips, errors: @errors }, status: 400
  #   end
  # end
  #
  #
  # def serializer_trips
  #   ActiveModel::Serializer::CollectionSerializer.new(current_user.trips.order(created_at: :desc), each_serializer: TripSerializer)
  # end
  #
  #

  def create
    if !UserPhoto.all.empty?
      UserPhoto.destroy_all
    end

     @image = UserPhoto.new(image: user_photo_params['image'], user_id: current_user.id)


     if @image.save
       redirect_to user_photos_path(@image)
     else
       @errors = @image.errors.full_messages
       render json: { current_user: current_user, errors: @errors }, status: 400
     end
  end

     private

     def user_photo_params
       params.require(:user_photo).permit(:image)
     end
  #
end
