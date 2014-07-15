# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Track.create(title: "Microeconomics")

Section.create(title: "Supply and Demand", track_id: 1)

Subsection.create(title: "Law of Demand", section_id: 1)

Resource.create(title: "Khan Academy Law of Demand", url: "https://www.khanacademy.org/economics-finance-domain/microeconomics/supply-demand-equilibrium/demand-curve-tutorial/v/law-of-demand", media_type: "video", subsection_id: 1)
Resource.create(title: "Investopedia Law of Demand Explanation", url: "http://www.investopedia.com/terms/l/lawofdemand.asp", subsection_id: 1)
Resource.create(title: "Economist - The Law of Demand is a Bummer", url: "http://www.economist.com/blogs/democracyinamerica/2013/02/minimum-wage", subsection_id: 1)
Subsection.create(title: "Law of Supply", section_id: 1)

Subsection.create(title: "Demand and prices", section_id: 1)

Subsection.create(title: "Demand and future prices", section_id: 1)

Subsection.create(title: "Demand and Income, Population, and Prefrence Chances", section_id: 1)

Subsection.create(title: "Normal and Inferior Goods", section_id: 1)


Section.create(title: "Elasticity", track_id: 1)

Subsection.create(title: "Demand and Elasticity", section_id: 2)
Resource.create(title: "Khan Academy Price Elasticity of Demand", url: "http://www.khanacademy.org/economics-finance-domain/microeconomics/elasticity-tutorial/price-elasticity-tutorial/v/price-elasticity-of-demand", media_type: "video", subsection_id: 7)
Resource.create(title: "Price Elasticity of Demand Definition", url: "http://www.investopedia.com/terms/p/priceelasticity.asp", media_type: "article", subsection_id: 7)

Section.create(title: "Consumer and Producer Surplus", track_id: 1)


Section.create(title: "Scarcity and Opportunity Cost", track_id: 1)


Section.create(title: "Competition", track_id: 1)


Section.create(title: "Nash Equilibrium", track_id: 1)