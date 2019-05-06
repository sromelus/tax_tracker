require 'rails_helper'

RSpec.describe User, type: :model do

  it { should have_valid(:email).when("John@gmail.com")}
  it { should have_valid(:first_name).when("Joe")}
  it { should have_valid(:last_name).when("Jackson")}
  it { should have_valid(:zip_code).when("02123")}
  it { should_not have_valid(:email).when(nil,"")}
  it { should_not have_valid(:first_name).when(nil,"")}
  it { should_not have_valid(:last_name).when(nil,"")}
  it { should_not have_valid(:zip_code).when(nil,"")}

  it 'should have_many trips (association test)' do

    new_user = User.create!(
       email: "happy@path.com",
       password: "password",
       first_name: "Joe",
       last_name: "Brown",
       zip_code: "29343"
     )
     trip1 = Trip.create!(
       miles: 34,
       net_earning: 78,
       user_id: new_user.id
     )
     trip2 = Trip.create!(
       miles: 43,
       net_earning: 98,
       user_id: new_user.id
     )

     expect(new_user.trips.length).to equal(2)
     expect(new_user.zip_code.length).to equal(5)

  end
end
