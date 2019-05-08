class TripSerializer < ActiveModel::Serializer
  attributes :id, :miles, :user_id, :created_at
end
