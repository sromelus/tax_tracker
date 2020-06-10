class AddexpensesToTrips < ActiveRecord::Migration[5.2]
  def change
    remove_column :trips, :net_earning, :float
    add_column :trips, :gross_income, :float
    add_column :trips, :maintenance, :float
    add_column :trips, :gas, :float
    add_column :trips, :insurance, :float
    add_column :trips, :food, :float
  end
end
