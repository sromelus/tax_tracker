class Addgrossincomecolumn01ToTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :gross_income, :float, null: false
  end
end
