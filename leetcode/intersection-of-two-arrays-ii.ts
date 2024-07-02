function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map()
    const answer = []

    for(let i = 0; i < nums1.length; i += 1) {
        if(map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        } else {
            map.set(nums1[i], 1)
        }
    } 

    for(let i = 0; i < nums2.length; i += 1) {
        if(map.has(nums2[i])) {
            const val = map.get(nums2[i])
            
            answer.push(nums2[i])

            if(val === 1) map.delete(nums2[i])
            else map.set(nums2[i], val - 1)
        } 
    }

    return answer
};