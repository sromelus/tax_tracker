class UserPhoto < ApplicationRecord
  validates :image, presence:true
  # validates :image, file_size: { less_than: 1.megabytes }
  mount_uploader :image, ImageUploader

  validate :image_size

  belongs_to :user


  private

  def image_size
    return if image.size < 1.megabytes
    errors.add(:image, 'Image size is too big. Image has to be less then one megabyte')
  end
end
