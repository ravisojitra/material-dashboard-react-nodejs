// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

export default function Summary() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="dark"
            icon="weekend"
            title="Bookings"
            count={281}
            percentage={{
              color: "success",
              amount: "+55%",
              label: "than lask week",
            }}
          />
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            icon="leaderboard"
            title="Today's Users"
            count="2,300"
            percentage={{
              color: "success",
              amount: "+3%",
              label: "than last month",
            }}
          />
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="success"
            icon="store"
            title="Revenue"
            count="34k"
            percentage={{
              color: "success",
              amount: "+1%",
              label: "than yesterday",
            }}
          />
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5}>
          <ComplexStatisticsCard
            color="primary"
            icon="person_add"
            title="Followers"
            count="+91"
            percentage={{
              color: "success",
              amount: "",
              label: "Just updated",
            }}
          />
        </MDBox>
      </Grid>
    </Grid>
  )
}