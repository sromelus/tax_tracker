require 'rails_helper'
require 'faker'

RSpec.describe Trip, type: :model do

  it {should have_valid(:miles).when(48)}
  it {should have_valid(:gross_income).when(94)}
  it {should_not have_valid(:miles).when(nil,"")}
  it {should_not have_valid(:gross_income).when(nil,"")}

  it "should have one user" do

    new_user1 = User.create!(
       email: "happy@path.com",
       password: "password",
       first_name: "Joe",
       last_name: "Brown",
       # zip_code: "29343"
     )
     new_user2 = User.create!(
        email: "great@path.com",
        password: "password",
        first_name: "Jimmy",
        last_name: "Badron",
        # zip_code: "29343"
      )
     trip1 = Trip.create!(
       miles: Faker::Number.between(1, 20),
       gross_income: Faker::Number.between(1, 20),
       maintenance: Faker::Number.between(40, 100),
       gas: Faker::Number.between(40, 100),
       insurance: Faker::Number.between(40, 100),
       food: Faker::Number.between(40, 100),
       user_id: new_user1.id

       # miles: 34,
       # net_earning: 78,
       # user_id: new_user1.id
     )
     trip2 = Trip.create!(
       miles: Faker::Number.between(1, 20),
       gross_income: Faker::Number.between(1, 20),
       maintenance: Faker::Number.between(40, 100),
       gas: Faker::Number.between(40, 100),
       insurance: Faker::Number.between(40, 100),
       food: Faker::Number.between(40, 100),
       user_id: new_user2.id
     )

     expect(new_user1.trips.first.user_id).to equal(new_user1.id)
     expect(new_user2.trips.first.user_id).to equal(new_user2.id)
  end
end


# require 'faker'
#
# user = User.create!(
#   email: "ab@gmail.com",
#   password: "password",
#   first_name: "Nado",
#   last_name: "Donal",
#   zip_code: "02124"
# )
#
# user2 = User.create!(
#   email: "abc@gmail.com",
#   password: "password",
#   first_name: "Karam",
#   last_name: "Holden"
# )
#
# 4.times do
#   Trip.create!(
#         miles: Faker::Number.between(1, 20),
#         gross_income: Faker::Number.between(1, 20),
#         maintenance: Faker::Number.between(40, 100),
#         gas: Faker::Number.between(40, 100),
#         insurance: Faker::Number.between(40, 100),
#         food: Faker::Number.between(40, 100),
#         user_id: user.id
#       )
#   Trip.create!(
#         miles: Faker::Number.between(1, 20),
#         gross_income: Faker::Number.between(1, 20),
#         maintenance: Faker::Number.between(40, 100),
#         gas: Faker::Number.between(40, 100),
#         user_id: user2.id
#       )
#   Trip.create!(
#         miles: Faker::Number.between(1, 20),
#         gross_income: Faker::Number.between(1, 20),
#         user_id: user2.id
#       )
# end
