class TripSerializer < ActiveModel::Serializer
  attributes :id, :miles, :user_id, :net_earning, :date, :time,

  def date
    "#{object.created_at.strftime("%m-%e-%Y")}"
  end

  def time
    "#{object.created_at.strftime("%I:%M %p")}"
  end

end
