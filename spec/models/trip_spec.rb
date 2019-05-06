require 'rails_helper'

RSpec.describe Trip, type: :model do

  it {should have_valid(:miles).when(48)}
  it {should have_valid(:net_earning).when(94)}
  it {should_not have_valid(:miles).when(nil,"")}
  it {should_not have_valid(:net_earning).when(nil,"")}

  it "should have one user" do

    new_user1 = User.create!(
       email: "happy@path.com",
       password: "password",
       first_name: "Joe",
       last_name: "Brown",
       zip_code: "29343"
     )
     new_user2 = User.create!(
        email: "great@path.com",
        password: "password",
        first_name: "Jimmy",
        last_name: "Badron",
        zip_code: "29343"
      )
     trip1 = Trip.create!(
       miles: 34,
       net_earning: 78,
       user_id: new_user1.id
     )
     trip2 = Trip.create!(
       miles: 43,
       net_earning: 98,
       user_id: new_user2.id
     )

     expect(new_user1.trips.first.user_id).to equal(new_user1.id)
     expect(new_user2.trips.first.user_id).to equal(new_user2.id)
  end
end
