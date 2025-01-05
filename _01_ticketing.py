# 1.0-11 free
# 2.12-18 or welfare 75%
# 3.19-120 100%
# 4.else error message
def ticketPrice(age, price, welfare = False):
  if(0<= age <=11):
    return 0
  elif(12 <= age <=18) or welfare:
    return price * 0.75
  elif(19 <= age <=120):
    return price
  else:
    return "invalid age input"
print(ticketPrice(20,200))  # 200
print(ticketPrice(10,100))  # 0
print(ticketPrice(20,200, True)) # 150
print(ticketPrice(15,100, True)) # 75
print(ticketPrice(300,200)) # invalid age input