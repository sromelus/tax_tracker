class TripSerializer < ActiveModel::Serializer
  attributes :id, :miles, :user_id, :gross_income, :maintenance, :food, :insurance, :gas, :date, :time,

  def date
    "#{object.created_at.strftime("%m-%-d-%Y")}"
  end

  def time
    "#{object.created_at.strftime("%I:%M %p")}"
  end

end
