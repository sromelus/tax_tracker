class RemTripRefFromUsersAndRemProfilePhotoColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_reference :users, :user_photo, foreign_key: true
    remove_reference :users, :trip, foreign_key: true
  end
end
