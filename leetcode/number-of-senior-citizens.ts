function countSeniors(details: string[]): number {
    return details.filter(v => {
        const age = Number(v[11] + v[12]);

        return age > 60;
    }).length;
};