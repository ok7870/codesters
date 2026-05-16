
class basegoblin:
    health=100

    def gethealth(_):
        return _.health
    def die(_):
        _.health=_.health-50
    
    def suhtle(_, sona):
        return "TERE" if sona=="tere" else "ei"

class scrumpygoblin(basegoblin):
    def __init__(_):
        _.health-=25

    def suhtle(_, sona):
        return super().suhtle(sona)
    
    

g1=basegoblin()

print(g1.suhtle("abc"))
print(g1.suhtle(input()))

g2=scrumpygoblin()
print(g2.gethealth())

