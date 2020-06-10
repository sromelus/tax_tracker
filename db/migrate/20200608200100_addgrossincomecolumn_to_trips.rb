class AddgrossincomecolumnToTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :gross_income, :float, null: false, default: 0
    change_column_null :trips, :gross_income, :float, default: nil
  end
end
