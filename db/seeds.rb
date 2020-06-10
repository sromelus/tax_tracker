require 'faker'

user = User.create!(
  email: "ab@gmail.com",
  password: "password",
  first_name: "Nado",
  last_name: "Donal",
  zip_code: "02124"
)

user2 = User.create!(
  email: "abc@gmail.com",
  password: "password",
  first_name: "Karam",
  last_name: "Holden"
)

4.times do
  Trip.create!(
        miles: Faker::Number.between(1, 20),
        gross_income: Faker::Number.between(1, 20),
        maintenance: Faker::Number.between(40, 100),
        gas: Faker::Number.between(40, 100),
        insurance: Faker::Number.between(40, 100),
        food: Faker::Number.between(40, 100),
        user_id: user.id
      )
  Trip.create!(
        miles: Faker::Number.between(1, 20),
        gross_income: Faker::Number.between(1, 20),
        maintenance: Faker::Number.between(40, 100),
        gas: Faker::Number.between(40, 100),
        user_id: user2.id
      )
  Trip.create!(
        miles: Faker::Number.between(1, 20),
        gross_income: Faker::Number.between(1, 20),
        user_id: user2.id
      )
end
