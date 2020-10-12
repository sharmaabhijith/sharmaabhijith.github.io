---
layout: posts
title: "Boom-Bikes_Rental"
date: 2020-03-20
tags: [regression, data science, messy data]
header:
  image: "/images/bike2.jpg"
excerpt: "Regression, Data Science, Messy Data"
mathjax: "true"
---
[Follow this for Github link of the project](https://github.com/sharmaabhijith/Boom_bikes-Rental-Regression.git)

A US bike-sharing provider BoomBikes has recently suffered considerable dips in their revenues due to the ongoing Corona pandemic. The company is finding it very difficult to sustain in the current market scenario. So, it has decided to come up with a mindful business plan to be able to accelerate its revenue as soon as the ongoing lockdown comes to an end, and the economy restores to a healthy state. 

In such an attempt, BoomBikes aspires to understand the demand for shared bikes among the people after this ongoing quarantine situation ends across the nation due to Covid-19.
The company wants to know:
- Which variables are significant in predicting the demand for shared bikes.
- How well those variables describe the bike demands

In the dataset provided, you will notice that there are three columns named 'casual', 'registered', and 'cnt'. The variable 'casual' indicates the number casual users who have made a rental. The variable 'registered' on the other hand shows the total number of registered users who have made a booking on a given day. Finally, the 'cnt' variable indicates the total number of bike rentals, including both casual and registered. The model should be built taking this 'cnt' as the target variable.

- The output model is evaluated on the basis of R2 score and F statistics.
- The final model has achieved **R2 score of 80% on train set and 78% on test set** and all assumptions of Linear Regression is also satisfied.
