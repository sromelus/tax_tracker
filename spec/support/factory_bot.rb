require 'factory_bot'

FactoryBot.define do
  factory :user do
    first_name {'text'}
    last_name {'text'}
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    # zip_code {'02123'}
  end

end
