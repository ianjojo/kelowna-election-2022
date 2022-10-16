import React, { Component } from "react";
import Chart from "react-apexcharts";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options1: {
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "lighten",
              value: 0.15,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        fill: {
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value < 10000) {
                return "#7E36AF";
              } else {
                return "#D9534F";
              }
            },
          ],
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          toolbar: {
            show: false,
          },

          id: "basic-bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,

            fill: {
              colors: ["#fe9240", "#238424"],
            },

            tooltip: {
              enabled: false,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "left",
            minWidth: 150,
            maxWidth: 200,
            fill: "#fff",
            trim: false,
            tooltip: {
              enabled: false,
            },
            style: {
              colors: ["#fff"],
              fontSize: "14px",
              fill: "#fff",
              fontWeight: 400,
              fontFamily: "Proza Libre",
              cssClass: "apexcharts-yaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            offsetX: 0,
            offsetY: 0,
          },

          crosshairs: {
            show: false,
            position: "back",
            tooltip: {
              enabled: false,
            },
            stroke: {
              color: "#b6b6b6",
              width: 1,
              dashArray: 0,
            },
          },
          tooltip: {
            enabled: false,

            onDatasetHover: {
              highlightDataSeries: false,
            },
          },
        },
        xaxis: {
          tooltip: {
            enabled: false,
          },
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: ["#fff"],
              fill: "#fff",
              fontSize: "15px",
              height: 20,
              textTransform: "uppercase",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
          },
          categories: [
            "Tom Dyas",
            "Colin Basran",
            "David Habib",
            "Silverado Socrates",
            "Glendon Smedley",
          ],
        },
      },
      options2: {
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "lighten",
              value: 0.15,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        fill: {
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value < 2000) {
                return "#7E36AF";
              } else {
                return "#D9534F";
              }
            },
          ],
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          toolbar: {
            show: false,
          },

          id: "basic-bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,

            tooltip: {
              enabled: false,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "left",
            minWidth: 150,
            maxWidth: 200,
            fill: {
              colors: ["#fff"],
            },
            trim: false,
            tooltip: {
              enabled: false,
            },
            style: {
              colors: "#fff",
              fontSize: "14px",
              fill: {
                colors: ["#fff"],
              },
              fontWeight: 400,
              fontFamily: "Proza Libre",
              cssClass: "apexcharts-yaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            offsetX: 0,
            offsetY: 0,
          },

          crosshairs: {
            show: false,
            position: "back",
            tooltip: {
              enabled: false,
            },
            stroke: {
              color: "#fff",
              width: 1,
              dashArray: 0,
            },
          },
          tooltip: {
            enabled: false,

            onDatasetHover: {
              highlightDataSeries: false,
            },
          },
        },
        xaxis: {
          tooltip: {
            enabled: false,
          },
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
              fontSize: "15px",

              textTransform: "uppercase",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
          },
          categories: [
            "Ron Cannan",
            "Loyal Wooldridge",
            "Gord Lovegrove",
            "Luke Stack",
            "Rick Webber",
            "Mohini Singh",
            "Charlie Hodge",
            "Maxine DeHart",
            "Chris Becenko",
            "Chris Bocskei",
            "Amarit Brar",
            "Sacheen Collecutt",
            "Greg Dahms",
            "Indy Dhial",
            "Darrin Fiddler",
            "Gail Given",
            "Bal Grewal",
            "Daniel Joseph",
            "James Kay",
            "Davis Kyle",
            "Amarjit Singh Lalli",
            "Tom Macauley",
            "Elaine McMurray",
            "Daniel Norman",
            "Brian Rogers",
            "Zach Sawatzky",
            "Dan Schlosser",
            "Anthony Shephard",
            "Peter Truch",
            "Noel Wentworth",
            "Chris Williams",
          ],
        },
      },
      options3: {
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "lighten",
              value: 0.15,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        fill: {
          colors: [
            function ({ value, seriesIndex, w }) {
              if (value < 2000) {
                return "#7E36AF";
              } else {
                return "#D9534F";
              }
            },
          ],
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          toolbar: {
            show: false,
          },

          id: "basic-bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,

            tooltip: {
              enabled: false,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "left",
            minWidth: 150,
            maxWidth: 200,
            fill: {
              colors: ["#fff"],
            },
            trim: false,
            tooltip: {
              enabled: false,
            },
            style: {
              colors: "#fff",
              fontSize: "14px",
              fill: {
                colors: ["#fff"],
              },
              fontWeight: 400,
              fontFamily: "Proza Libre",
              cssClass: "apexcharts-yaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            offsetX: 0,
            offsetY: 0,
          },

          crosshairs: {
            show: false,
            position: "back",
            tooltip: {
              enabled: false,
            },
            stroke: {
              color: "#fff",
              width: 1,
              dashArray: 0,
            },
          },
          tooltip: {
            enabled: false,

            onDatasetHover: {
              highlightDataSeries: false,
            },
          },
        },
        xaxis: {
          tooltip: {
            enabled: false,
          },
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
              fontSize: "15px",

              textTransform: "uppercase",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },

            offsetX: 0,
            offsetY: 0,
          },
          categories: [
            "Julia Fraser",
            "Wayne Broughton",
            "Lee-Ann Tiede",
            "Val Johnson",
            "Teresa Docksteader",
            "Chris Fieber",
            "Tovey Demman",
            "Erika Shephard",
            "Chris Becenko",
          ],
        },
      },
      mayors: [
        {
          name: "Votes",
          data: [16000, 4000, 2000, 1000, 49],
        },
      ],
      council: [
        {
          name: "Votes",
          data: [
            16000, 4000, 2000, 1000, 49, 5335, 4000, 2000, 1000, 49, 16000,
            4000, 2000, 1000, 49, 16000, 4000, 2000, 1000, 49, 16000, 4000,
            2000, 1000, 49, 16000, 4000, 2000, 1000, 49, 4, 49,
          ],
        },
      ],
      trustee: [
        {
          name: "Votes",
          data: [16000, 4000, 2000, 1000, 49, 4279, 472, 327, 472],
        },
      ],
      voters: [
        {
          name: "Voters",
          data: [32, 68],
        },
      ],
    };
  }

  render() {
    return (
      <div className='chart'>
        <p className='intro'>
          This election is over. 32% of the population got out to vote and below
          are the results. If you'd like something similar built for your
          municipality's upcoming election, contact me!
        </p>
        <div className='results-container'>
          <h1 className='h1-results'>Mayor Results</h1>
          <div className='results-box'>
            <div className='red'></div> indicates a win
          </div>
        </div>
        <div className='row'>
          <div className='mixed-chart'>
            <Chart
              options={this.state.options1}
              series={this.state.mayors}
              type='bar'
              width='100%'
              height='400px'
            />
            <div className='results-container'>
              <h1 className='h1-results'>Council Results (8 chosen)</h1>
              <div className='results-box'>
                <div className='red'></div> indicates a win
              </div>
            </div>
            <Chart
              options={this.state.options2}
              series={this.state.council}
              type='bar'
              width='100%'
              height='1200px'
            />
            <div className='results-container'>
              <h1 className='h1-results'>School Trustee Results (4 chosen)</h1>
              <div className='results-box'>
                <div className='red'></div> indicates a win
              </div>
            </div>
            <Chart
              options={this.state.options3}
              series={this.state.trustee}
              type='bar'
              width='100%'
              height='700px'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
