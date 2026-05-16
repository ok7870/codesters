
class goblintemplate:
    health=100
    def gethealth(_):
        return _.health
    def die(_):
        _.health=_.health-50
    
goblin=goblintemplate()
print(goblin.gethealth())

goblin.die()
print(goblin.gethealth())

goblin=goblintemplate()
print(goblin.gethealth())