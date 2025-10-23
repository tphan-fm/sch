google.charts.load("current", { packages: ["table"] });
google.charts.setOnLoadCallback(drawTable);
function drawTable() {
  var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1awJkzoqrObVCie-ecu-kb9UT8YDJJZf7dleANuQrs0Q/edit?usp=sharing"
  );
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var data = response.getDataTable();

  // table = you can dynamically apply the color column to the table
  var index = new google.visualization.Table(
    document.getElementById("table_div")
  );

  var cssClassNames = {
    headerRow: "bigAndBoldClass",
    hoverTableRow: "highlightClass"
  };

  index.draw(data, {
    sort: "disable",
    allowhtml: true,
    showRowNumber: false,
    interpolateNulls: true,
    width: "100%",
    height: "100%",
    cssClassNames: cssClassNames
  });
}
