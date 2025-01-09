# 1.0-11 free
# 2.12-18 or welfare 75%
# 3.19-120 100%
# 4.else error message

def ticket_price(age, price, welfare=False):
    if 0 <= age <= 11:
        return 0
    elif 12 <= age <= 18 or welfare:
        return price * 0.75
    elif 19 <= age <= 120:
        return price
    else:
        return "invalid age input"

# Test cases
print(ticket_price(15, 200))  # 150
print(ticket_price(60, 100, True))  # 75
print(ticket_price(14, 200, True))  # 150
print(ticket_price(4, 100, True))  # 0
print(ticket_price(150, 300))  # invalid age input
