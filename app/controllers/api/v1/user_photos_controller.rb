class Api::V1::UserPhotosController < ApplicationController
  
  def create
    #delete all previous user_photo before adding a new photo
    if !UserPhoto.all.empty?
      UserPhoto.where("user_id =#{current_user.id}").destroy_all
    end

     @image = UserPhoto.new(image: params['user_photo'], user_id: current_user.id)

     if @image.save!
       # current_user: current_user,
       # image: UserPhoto.first
       render json: { image: UserPhoto.first.image.url, message: "New image saved successfully", errors: "" }
     else
       @errors = @image.errors.full_messages
       render json: { current_user: current_user, errors: @errors }, status: 400
     end
  end

   # private
   #
   # def user_photo_params
   #   params.require(:user_photo).permit(:user_photo)
   # end
end
