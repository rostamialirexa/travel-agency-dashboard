import { Header, StatsCard, TripCard } from 'components'
import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel, SeriesCollectionDirective, SeriesDirective,
  SplineAreaSeries,
  Tooltip
} from "@syncfusion/ej2-react-charts";
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from "@syncfusion/ej2-react-grids";
import { tripXAxis, tripyAxis, userXAxis, useryAxis } from "~/constants";

const user = {
  name: 'Alireza',
  email: 'alireza@gmail.com',
  imageUrl: '/assets/images/david.webp'
}
const dashboardStats = {
  totalUsers: 12450,
  usersJoined: {
    currentMonth: 218,
    lastMonth: 176
  },
  totalTrips: 3210,
  tripsCreated: {
    currentMonth: 150,
    lastMonth: 250
  },
  userRole: {
    total: 62,
    currentMonth: 25,
    lastMonth: 15
  }
}
const allTrips = [{
  id: 1,
  name: "Tropical Rewind",
  imageUrls: ["/assets/images/sample1.jpg"],
  itinerary: [{ location: "Thailand" }],
  tags: ["Adventure", "Culture"],
  travelStyle: "Solo",
  estimatedPrice: "$1,000",
},
{
  id: 2,
  name: "French Reverie",
  imageUrls: ["/assets/images/sample2.jpg"],
  itinerary: [{ location: "Paris" }],
  tags: ["Relaxation", "Culinary"],
  travelStyle: "Family",
  estimatedPrice: "$2,000",
},
{
  id: 3,
  name: "Zen Break",
  imageUrls: ["/assets/images/sample3.jpg"],
  itinerary: [{ location: "Japan" }],
  tags: ["Shopping", "Luxury"],
  travelStyle: "Couple",
  estimatedPrice: "$3,000",
},
{
  id: 4,
  name: "Adventure in Westeros",
  imageUrls: ["/assets/images/sample4.jpg"],
  itinerary: [{ location: "Croatia" }],
  tags: ["Historical", "Culture"],
  travelStyle: "Friends",
  estimatedPrice: "$4,000",
},
];
const dashboard = () => {

  return (
    <div className='dashboard wrapper' >
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.usersJoined.currentMonth}
            lastMonthCount={dashboardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={dashboardStats.userRole.total}
            currentMonthCount={dashboardStats.userRole.currentMonth}
            lastMonthCount={dashboardStats.userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

        <div className='trip-grid'>
          {allTrips.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ''}
              // [trip.interests!, trip.travelStyle!]
              tags={trip.tags}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartComponent
          id="chart-1"
          primaryXAxis={userXAxis}
          primaryYAxis={useryAxis}
          title="User Growth"
          tooltip={{ enable: true }}
        >
          <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

          <SeriesCollectionDirective>
            {/* <SeriesDirective
              dataSource={userGrowth}
              xName="day"
              yName="count"
              type="Column"
              name="Column"
              columnWidth={0.3}
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />

            <SeriesDirective
              dataSource={userGrowth}
              xName="day"
              yName="count"
              type="SplineArea"
              name="Wave"
              fill="rgba(71, 132, 238, 0.3)"
              border={{ width: 2, color: '#4784EE' }}
            /> */}
          </SeriesCollectionDirective>
        </ChartComponent>

        <ChartComponent
          id="chart-2"
          primaryXAxis={tripXAxis}
          primaryYAxis={tripyAxis}
          title="Trip Trends"
          tooltip={{ enable: true }}
        >
          <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />

          <SeriesCollectionDirective>
            {/* <SeriesDirective
              dataSource={tripsByTravelStyle}
              xName="travelStyle"
              yName="count"
              type="Column"
              name="day"
              columnWidth={0.3}
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            /> */}
          </SeriesCollectionDirective>
        </ChartComponent>
      </section>

    </div>
  )
}

export default dashboard