class Trip < ApplicationRecord
  validates :miles, numericality: { greater_than: 0 }
  validates :net_earning, numericality: { greater_than: 0 }

  belongs_to :user
end
