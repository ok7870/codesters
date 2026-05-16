workforce={}

import os

while True:
    inpt=str(input())
    if inpt=="add":
        newworker=str(input("add new worker: "))
        if newworker in workforce:
            print("worker allready in workforce: ")
        
        else:
            workforce[newworker]=input("add worker status: ")

    elif inpt=="remove" or inpt=="kill":
        inpt=input("remove/list: ")

        if inpt=="list":
            print(list(workforce))
            workforce.pop(str(input("worker to remove: ")))
        if inpt=="remove":
            workforce.pop(str(input("worker to remove: ")))
    
    elif inpt=="change":
        print(list(workforce))
        inpt=input("who to change: ")
        if inpt in workforce:
            workforce[inpt]=input("new status: ")

    os.system('cls' if os.name == 'nt' else 'clear')
    print(workforce)