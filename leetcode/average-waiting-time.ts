function averageWaitingTime(customers: number[][]): number {
    let time = 0; 
    let total = 0;

    const len = customers.length;

    for(let i = 0 ; i < len; i += 1) {
        const [arrival, wait] = customers[i];

        if(time < arrival) {
            time = arrival;
        }

        if(time > arrival) {
            total += (time - arrival);
        }

        time += wait;
        total += wait
    }

    return (total / len)
};