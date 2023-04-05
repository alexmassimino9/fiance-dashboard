import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useMemo } from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'



interface Props {
    
}

const Row1 = (props: Props) => {

    const { data } = useGetKpisQuery()
    console.log("data", data)


    return (
       <>
       <DashboardBox gridArea="a">
       <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
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
       </DashboardBox> 
       <DashboardBox gridArea="b"/> 
       <DashboardBox gridArea="c"/> 
       
       </>

    )
}

export default Row1
