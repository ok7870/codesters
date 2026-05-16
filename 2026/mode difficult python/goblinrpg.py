from time import sleep
from random import randint
from os import system



class goblintemp:
    health=100
    stenght=10
    xprew=10
    wepons=['brokehand', 'hand', 'club', 'dagger', 'stabby', 'bighammer']
    posibility=[20, 500, 750, 900, 990, 1000]
    combatactions={}
    combatactions['brokehand']=[{'weakpunch' : [2, 5, 0, 0, 0, ['brokehand', 0], ["Arm still good! Just… bendy now.", "Tis but a scratch! A very… very hurty scratch", "Ow ow ow—STOP LOOKING AT IT!", "Goblin doctor say it fine. Goblin doctor also missing head.", "Still got teeth! Teeth never break!", "You break arm, not goblin! …okay maybe little goblin.", "You hit wrong arm! That was my FAVORITE arm!", "If I had two arms, you’d be so dead right now!", "Arm like noodle. Goblin hate noodles!", "You owe me one arm apology!"], ["Next life I’m using a shield", "You fight dirty with all those limbs", "I die but you still smell bad", "I hope my arm trips you later", "I hope that the next day you step on a lego."], ["Ahhh! I loves visitors… especially hurtin’ ones!", "Oi! You there! Yeah, you!", "Two fists? Pfft… I got one… and it’s dangeours!"], ["You picked the worst corner to lurk in, smoothskin.", "I look away ONE second to fix me arm and this is what I see?!", "Hehehe… thought I didn’t see you crouchin’? I smell fear, even with one good arm.", ]]}]
    def __init__(self):
        self.leiarelv()
    def leiarelv(_):
        _.relv='hand'
        for nr in range(len(_.posibility)):
            if randint(0, 1000)<=_.posibility[nr]:
                _.relv=_.wepons[nr]
                return
    

            
            
goblin=goblintemp()
print(goblin.relv)
exit()

def inper(ask):
    a=input(ask).lower()

    if a == "y":
        return True
    
    elif a == "n":
        return False
    
    elif a == "p": #pause non functional
        return
    
    else:
        return a


def ui():
    global player
    system('cls')
    print("you might be almost dead, but I dont know (I KNOW). anyways here is your health:", player["health"], "\n", player["xp"])


player={}
player["health"]=100
player["xp"]=0
player["items"]=[]
player["skils"]=[]
player['effects']=[]

#goblin = {}
#goblin["health"]=100
#goblin["strenght"]=10
#goblin["xprew"]=10
#goblin["psitems"]={}
#goblin['psitems']['club']=[2, 500, 700]
#goblin["psitems"]['dagger']=[3, 700, 900]
#goblin["psitems"]['stabby']=[5, 900, 990]
#goblin["psitems"]['bighammer']=[30, 990, 1000]


#---------------------------------------
        
system('cls')

if input("Begin game [y/n]").lower() == "n":

    print('I feel sad and angry at the same time because you don’t want to play my game. I was really excited to share it with you, and it hurts that you don’t even want to try. It makes me feel ignored, like what I care about doesn’t matter. I know it’s just a game, but it meant something to me, and your refusal feels heavier than it should. I wish you could understand why this upsets me i truly spent so much time on this, i cant explain to you ennough my feeleng of sorrow that you dont want to play my game. Even though some of it was made by and or with chat gpt i still had a really difficult time of writing the prompt "write a text about you being sad and angry becasue someone doesnt want to play your game", but i belive that at least half of it is made by my tierd hands that are writing this instead of doing the accual task. anyways why do you not want to play my game.')
    if input('It was boring [y/n]') == "y":
        system('cls')
        print('you are boring')
    else:
        system('cls')
        print("If there was a bug please report it to costumer service, so that we can properly ignore it like a good game company.")
    exit()

system('cls')


input("You wake up in a dungeon, it smells.\n\nTo continue press ENTER . . .")
system('cls')

for day in range(10):
    ui()
    print(randint(1,1000))
    input("To continue press ENTER . . .")