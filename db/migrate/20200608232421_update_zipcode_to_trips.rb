class UpdateZipcodeToTrips < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :zip_code, true
  end
end
