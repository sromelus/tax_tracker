class DropUserTrips < ActiveRecord::Migration[5.2]
  def change
    drop_table :user_trips
  end
end
