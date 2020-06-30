class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence:true
  validates :first_name, presence:true
  validates :last_name, presence:true
  # validates :zip_code
  # validates_length_of :zip_code, :is => 5

  has_many :trips
  has_one :user_photo
end
