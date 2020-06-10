class AddremovegrossincomecolumnToTrips < ActiveRecord::Migration[5.2]
  def change
    remove_column :trips, :gross_income, :float
  end
end
