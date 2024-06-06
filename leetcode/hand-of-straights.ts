function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(groupSize === 1) return true;

    const groups = [];

    hand.sort((a, b) => a - b);
    
    for(let i = 0; i < hand.length; i += 1) {
        let flag = false;

        for(let j = 0; j < groups.length; j += 1) {
            if(!groups[j].hash.has(hand[i])) {                
                if(groups[j].last !== hand[i] - 1) {
                    return false;
                }

                groups[j].hash.add(hand[i]);
                groups[j].last = hand[i];

                if(groups[j].hash.size === groupSize) {
                    groups.shift();
                }

                flag = true;

                break;
            }
        }

        if(!flag) {
            const nextGroup = new Set([hand[i]]);

            groups.push({hash: nextGroup, last: hand[i]});
        }
    }

    return groups.length === 0;
};