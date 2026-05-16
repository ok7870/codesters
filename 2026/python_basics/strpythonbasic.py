playing=False
songlist=[]
songnum=0


def play():
    global playing
    playing=True
def pause():
    global playing
    playing=False

def listadd(add):
    global songlist
    songlist.append(str(add))
    print(songlist)

def next():
    global songnum
    songnum+=1

def prev():
    global songnum
    songnum-=1
    if songnum<0:
        print("no")
        songnum=0

while True:

    inpt=str(input())
    if inpt=="play":
        play()
        print("playing: ", playing)

    elif inpt=="pause":
        pause()
        print("playing: ", playing)

    elif inpt=="list add":
        listadd(str(input("song to add: ")))
    
    elif inpt=="next":
        next()
        print("playing: ", songlist[songnum])

    elif inpt=="previus":
        prev()
        print("playing: ", songlist[songnum])

    elif inpt=="list":
        print(songlist)