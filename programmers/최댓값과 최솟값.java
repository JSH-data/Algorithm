class Solution {
    public String solution(String s) {
        String[] arr = s.split(" ");
        
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        
        for (int i = 0; i < arr.length; i += 1) {
            int num = Integer.parseInt(arr[i]);
            
            if (max < num) {
                max = num;
            }
            
            if (min > num) {
                min = num;
            }
        }
        
        return min + " " + max;
    }
}