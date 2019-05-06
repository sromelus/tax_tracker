class RemoveTripsDatetimeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :trips, :trip_date
  end
end
