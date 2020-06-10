class Trip < ApplicationRecord
  validates :miles, numericality: { greater_than: 0 }
  validates :gross_income, numericality: { greater_than: 0 }

  belongs_to :user
end
