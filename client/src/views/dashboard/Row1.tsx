import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



interface Props {
    
}

const Row1 = (props: Props) => {

    const { data } = useGetKpisQuery()
    console.log("data", data)
    const revenueExpenses = useMemo(() => {
      return (
        data &&
        data[0].monthlyData.map(({ month, revenue, expenses })=>{
          return { name: month.substring(0,3), revenue: revenue, expenses:expenses }
        })
      )
    } , [])

    console.log("revenueExpenses", revenueExpenses)
    return (
       <>
         <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
       
       </>

    )
}

export default Row1
