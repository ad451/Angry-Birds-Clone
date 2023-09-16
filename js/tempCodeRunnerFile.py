
            return min(ans1,ans2,ans3)
        return j-i+1       
                
    def minLengthAfterRemovals(self, nums) -> int:
        return self.helper(nums,0,len(nums)-1)
