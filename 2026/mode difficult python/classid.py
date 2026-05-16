import random

class elukas:
    def kusirelv(argument):
        return "tere"+str(argument.arv)
    
    def loosiarv(argument):
        argument.arv=random.randint(0, 1000)
    
e1=elukas()

e1.loosiarv()
print(e1.kusirelv())
print(e1.kusirelv())

e1.loosiarv()
print(e1.kusirelv())
print(e1.kusirelv())