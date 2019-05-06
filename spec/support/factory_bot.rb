require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name {'text'}
    last_name {'text'}
    zip_code {'02123'}
  end

end
