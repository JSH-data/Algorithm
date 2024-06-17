function solution(users, emoticons) {
    const eLen = emoticons.length;
    const uLen = users.length;
    const discountInfo = [
        {percent: 10, discount: 0.9},
        {percent: 20, discount: 0.8},
        {percent: 30, discount: 0.7},
        {percent: 40, discount: 0.6}
    ];
    const result = [];
    
    function calculate(prices) {
        let plus = 0;
        let totalPrice = 0;
        
        for(let i = 0; i < uLen; i += 1) {
            const [discount, limit] = users[i];
            
            let acc = 0;
            
            for(let j = 0; j < prices.length; j += 1) {
                if(prices[j].percent >= discount) {
                    acc += prices[j].price;
                }
            }
            
            if(acc < limit) {
                totalPrice += acc;
            } else {
                if(prices.length === 2) {
                    console.log(prices)
                }
                plus += 1;
            }
        }
        
        return [plus, totalPrice];
    }
    

    function dfs(arr, lastIdx) {    
        if (lastIdx === eLen - 1) {
            result.push(calculate(arr));

            return;
        }

        for (let i = 0; i < 4; i += 1) {
            dfs(
                [
                  ...arr,
                  {
                    percent: discountInfo[i].percent,
                    price: emoticons[lastIdx + 1] * discountInfo[i].discount,
                  },
                ],
                lastIdx + 1
              );
        }
    }

    dfs([], -1);    
    
    result.sort((a, b) => {
        if(a[0] !== b[0]) {
            return b[0] - a[0];
        }
        
        return b[1] - a[1];
    })
    
    return result[0]
}