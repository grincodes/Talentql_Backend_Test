# The WhatsMyAge Api
is a very simple API that calculates and return the age of a preson, given their date of birth

# How it Works
Get  user age based on timestamp value of date of birth.

Pass timestamped value  of dob as a query parmeter to the howold endpoint 

**Example:**
GET Request 
https://agile-wildwood-01406.herokuapp.com//howold/?dob=timestampedvalueofdob

# Constraints
The endpoint has a rate limiter such that not more than 3 calls are allowed within one second.




