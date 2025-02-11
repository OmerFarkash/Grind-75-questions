# idea: we can find the lowest buy up to i
# then max the prices to the end (it's observeble that the highest 
# point is not got to change, only the lowest)
 
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = prices[0]
        max_profit = 0
        
        for price in prices:
            if price < min_price:
                min_price = price
                
            max_profit = max(max_profit, price - min_price)
        return max_profit
     
prices = [7,1,5,3,6,4]
sol = Solution()
print()
print(sol.maxProfit(prices))