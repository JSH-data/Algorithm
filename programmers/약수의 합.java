public class Solution {
    public static int solution(int n) {
        int sum = 0;
        
        for(int i = 1; i <= Math.sqrt(n); i++) {
            if(n % i == 0) {
                if(n / i == i) {
                    sum += i;
                } else {
                    sum += i;
                    sum += n / i;
                }
            }
        }
        
        return sum;
    }
}