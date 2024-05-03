{
    //spread operator
    //array example
    const bros1: string[] = ['mir', 'firoz', 'mizan']
    const bros2: string[] = ['tanmoy', 'nahid', 'rahat']
    bros1.push(...bros2)

    // object example

    const mentors1 = {
        ts: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    }

    const mentors2 = {
        prisma: 'firoz',
        cloud: 'nahid',
        next: 'tanmoy'

    }
    const mentorList = {
        ...mentors1, ...mentors2
    }

    // rest operator
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    };
    greetFriends('abul', 'babul', 'kabul')


}
