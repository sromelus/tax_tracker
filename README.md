# README

Tax Helper is platform to help rideshare drivers with their taxes. The app track taxes by applying Irs's standard mileage deduction
each mile the user drive. The app will provide the user a comprehensive list of a their trips by day, month and year.

You can see a demo version running at http://taxtrackr.herokuapp.com

Ruby version 2.4.5

System dependencies

fontAwesome

Startup

run two processes from the project root yarn run start and rails s
Db Configuration

running rake db:create; rake db:migrate; rake db:seed should get your db set up.
How to run the test suite

You can run enzyme tests with yarn run test

You can run rspec tests with bundle exec rspec

Deployment instructions

This pushed to heroku cleanly. Be sure to give heroku your env values.

heroku config:set AWS_ACCESS_KEY_ID=YOURKEYIDHERE

heroku config:set AWS_SECRET_ACCESS_KEY=YOURSECRETKEYHERE

heroku config:set S3_BUCKET=yourS3BucketHere

[![Codeship Status for sromelus/tax_tracker](https://app.codeship.com/projects/42548430-519e-0137-a957-1698be22a756/status?branch=master)](https://app.codeship.com/projects/340131)
