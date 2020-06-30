class RemUserReFFromTripAndRemProfilePhotoColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_reference :trips, :user, foreign_key: true
    remove_column :users, :profile_photo, :string
  end
end
