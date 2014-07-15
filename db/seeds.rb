# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Track.create(title: "Microeconomics")

Section.create(title: "SECTION Supply and Demand", track_id: 1)
Subsection.create(title: "Subsection Law of Demand", section_id: 1)
Resource.create(title: "Khan Academy Law of Demand", url: "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium/demand-curve-tutorial/v/law-of-demand", media_type: "video", subsection_id: 1)
Resource.create(title: "Investopedia Law of Demand Explanation", url: "http://www.investopedia.com/terms/l/lawofdemand.asp", subsection_id: 1)
Resource.create(title: "Economist - The Law of Demand is a Bummer", url: "http://www.economist.com/blogs/democracyinamerica/2013/02/minimum-wage", subsection_id: 1)
Subsection.create(title: "Subsection Law of Supply", section_id: 1)

Section.create(title: "SECTION Demand and prices", track_id: 1)

Section.create(title: "SECTION Demand and future prices", track_id: 1)

Section.create(title: "SECTION Demand and Income, Population, and Prefrence Chances", track_id: 1)

Section.create(title: "SECTION Normal and Inferior Goods", track_id: 1)