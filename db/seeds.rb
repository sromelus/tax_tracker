require 'faker'

user = User.create!(
  email: "a@gmail.com",
  password: "password",
  first_name: "Nado",
  last_name: "Donal",
  zip_code: "02124"
)

user2 = User.create!(
  email: "b@gmail.com",
  password: "password",
  first_name: "Karam",
  last_name: "Holden",
  zip_code: "34112"
)

4.times do
  Trip.create!(
        miles: Faker::Number.between(1, 20),
        net_earning: Faker::Number.between(1, 20),
        user_id: user.id
      )
  Trip.create!(
        miles: Faker::Number.between(1, 20),
        net_earning: Faker::Number.between(1, 20),
        user_id: user2.id
      )
end
