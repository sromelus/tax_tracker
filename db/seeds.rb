require 'faker'

user = User.create!(
  email: "jamesd@gmail.com",
  password: "password",
  first_name: "James",
  last_name: "Donovan"
)

user2 = User.create!(
  email: "karam@gmail.com",
  password: "password",
  first_name: "Karam",
  last_name: "Holden"
)

30.times do
  Trip.create!(
        miles: Faker::Number.between(100, 200),
        gross_income: Faker::Number.between(95, 320),
        maintenance: Faker::Number.between(0, 110),
        gas: Faker::Number.between(10, 15),
        insurance: Faker::Number.between(2, 5),
        food: Faker::Number.between(8, 15),
        user_id: user.id
      )
  Trip.create!(
        miles: Faker::Number.between(100, 200),
        gross_income: Faker::Number.between(95, 320),
        maintenance: Faker::Number.between(0, 110),
        gas: Faker::Number.between(10, 15),
        user_id: user2.id
      )
  Trip.create!(
        miles: Faker::Number.between(100, 200),
        gross_income: Faker::Number.between(95, 320),
        user_id: user2.id
      )
end
