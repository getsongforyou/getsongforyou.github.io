class Solution:
    def reverse(self, x: int, y: int) -> int:
        dp = [[1]*y]*x
        print(dp)
      
        for l in range(1,y):
            for i in range(1,x):
                dp[i][l] = dp[i-1][l]+dp[i][l-1]
                print(dp[i][l])
        
        # for l in range(1,x):
        #     for i in range(1,y):
        #         dp[l][i] = dp[l-1][i]+dp[l][i-1]
        print(dp[x-1][y-1])
        for l in range(y):
            print('\n')
            for i in range(x):
                print(dp[i][l], end=' ')
l = Solution()
l.reverse(3,7)