class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :miles, null: false
      t.integer :net_earning, null: false
      t.datetime :trip_date, null: false

      t.timestamps null: false
    end
  end
end
