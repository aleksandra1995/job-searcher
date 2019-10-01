# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'pry'
response = RestClient.get("https://jobs.github.com/positions.json?")
response_hash = JSON.parse(response)


response_hash.each do |job|
    Job.create(kind: job["type"], url: job["url"], posted: job["created_at"], company: job["company"], company_url: job["company_url"], location: job["location"], title: job["title"], description: job["description"], how_to_apply: job["how_to_apply"], company_logo: job["company_logo"])
end



