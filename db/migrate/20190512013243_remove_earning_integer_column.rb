class RemoveEarningIntegerColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :trips, :net_earning
    add_column :trips, :net_earning, :float
  end
end
