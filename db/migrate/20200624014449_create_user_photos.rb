class CreateUserPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_photos do |t|
      t.string :image, null: false
      t.belongs_to :user

      t.timestamps
    end
  end
end
