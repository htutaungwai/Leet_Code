public class Solution
{
    public int MaximumWealth(int[][] accounts)
    {
        int maxWealth = 0;

        foreach (var account in accounts)
        {
            int wealth = 0;

            for (int i = 0; i < account.lenght; i++)
            {
                wealth += account[i];
            }

            if(wealth > maxWealth)
            {
                maxWealth = wealth;
            }

        }

        return maxWealth; 

    }

}