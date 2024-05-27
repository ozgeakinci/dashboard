
import BuyProfileChart from './BuyProfileChart'
import DashboardStatsGrid from './DashboardStatsGrid'
import PopularProducts from './PopularProducts'
import RecentOrders from './RecentOrders'
import TransactionChart from './TransactionChart'

const Dashboard = () => {
  return (
    <div className='flex gap-4 flex-col '>
     <DashboardStatsGrid/>
     <div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyProfileChart />
			</div>
      <div className="flex flex-row gap-4 w-full">
	<RecentOrders/>
  <PopularProducts/>
			</div>
    
    </div>
  )
}

export default Dashboard
