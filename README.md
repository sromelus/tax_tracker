# README [![Codeship Status for sromelus/tax_tracker](https://app.codeship.com/projects/42548430-519e-0137-a957-1698be22a756/status?branch=master)](https://app.codeship.com/projects/340131)

Taxtraker is a platform to help rideshare drivers track their taxes. The app tracks taxes by applying Irs's standard mileage deduction for each mile the user drive.

You can see a demo version running at http://taxtraker.herokuapp.com

####  Ruby version 2.4.5

System dependencies

fontAwesome

## Startup - From the root folder
In order to run the app locally. Open two command line tabs.
`cd <app name>`

#### On the first tab run
>1. bundle install
>2. bundle exec bundle
>2. bundle exec rails s

#### On the second tab run
>1. yarn install
>1. yarn run start

## How to run the test suite

You can run enzyme tests with

> 1. yarn run test

You can run rspec tests with

> 2. bundle exec rspec

Deployment instructions

This pushed to heroku cleanly. Be sure to give heroku your env values.

heroku config:set AWS_ACCESS_KEY_ID=YOURKEYIDHERE

heroku config:set AWS_SECRET_ACCESS_KEY=YOURSECRETKEYHERE

heroku config:set S3_BUCKET=yourS3BucketHere
