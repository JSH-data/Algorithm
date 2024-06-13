function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b)=> a - b)
    students.sort((a, b) => a - b)
    
    let answer = 0;
    
    for(let i = 0; i < students.length; i += 1){
        answer += Math.abs(students[i] - seats[i]);
    }

    return answer
};