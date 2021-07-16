
     var sample = [
      {"index":1,"firstname":"Nishi","lastname":"gawas","email":"gawsa@gmail.com","age":20,"DOB":"21 feb 2000","mobile":"987654321"},
      {"index":2,"firstname":"Sandeep","lastname":"Bhatkande","email":"gawsa@gmail.com","age":28,"DOB":"21 feb 1970","mobile":"987654321"},
      {"index":3,"firstname":"Geeta","lastname":"gawas","email":"gawsa@gmail.com","age":25,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":4,"firstname":"Nutan","lastname":"gawas","email":"gawsa@gmail.com","age":50,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":5,"firstname":"Ram","lastname":"gawas","email":"gawsa@gmail.com","age":34,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":6,"firstname":"Shyam","lastname":"gawas","email":"gawsa@gmail.com","age":54,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":7,"firstname":"Nita","lastname":"gawas","email":"gawsa@gmail.com","age":29,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":8,"firstname":"Sunita","lastname":"gawas","email":"gawsa@gmail.com","age":43,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":9,"firstname":"Jay","lastname":"gawas","email":"gawsa@gmail.com","age":31,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":10,"firstname":"Neha","lastname":"gawas","email":"gawsa@gmail.com","age":43,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":11,"firstname":"Nilam","lastname":"gawas","email":"gawsa@gmail.com","age":32,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":12,"firstname":"Rahul","lastname":"gawas","email":"gawsa@gmail.com","age":64,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":13,"firstname":"Sujay","lastname":"gawas","email":"gawsa@gmail.com","age":65,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":14,"firstname":"Namrata","lastname":"gawas","email":"gawsa@gmail.com","age":34,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":15,"firstname":"Komal","lastname":"gawas","email":"gawsa@gmail.com","age":36,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":16,"firstname":"Yamini","lastname":"gawas","email":"gawsa@gmail.com","age":38,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":17,"firstname":"Kaya","lastname":"gawas","email":"gawsa@gmail.com","age":23,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":18,"firstname":"Sonal","lastname":"gawas","email":"gawsa@gmail.com","age":18,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":19,"firstname":"Nimesh","lastname":"gawas","email":"gawsa@gmail.com","age":16,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":20,"firstname":"Ayan","lastname":"gawas","email":"gawsa@gmail.com","age":44,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":21,"firstname":"Rima","lastname":"gawas","email":"gawsa@gmail.com","age":33,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":22,"firstname":"Lila","lastname":"gawas","email":"gawsa@gmail.com","age":22,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":23,"firstname":"Maya","lastname":"gawas","email":"gawsa@gmail.com","age":33,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":24,"firstname":"Rima","lastname":"gawas","email":"gawsa@gmail.com","age":43,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":25,"firstname":"Sara","lastname":"gawas","email":"gawsa@gmail.com","age":32,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":26,"firstname":"Rama","lastname":"gawas","email":"gawsa@gmail.com","age":54,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":27,"firstname":"Kamal","lastname":"gawas","email":"gawsa@gmail.com","age":43,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":28,"firstname":"Naman","lastname":"gawas","email":"gawsa@gmail.com","age":22,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":29,"firstname":"Kala","lastname":"gawas","email":"gawsa@gmail.com","age":54,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":30,"firstname":"Yam","lastname":"gawas","email":"gawsa@gmail.com","age":53,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":31,"firstname":"Karan","lastname":"gawas","email":"gawsa@gmail.com","age":22,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":32,"firstname":"Suraj","lastname":"gawas","email":"gawsa@gmail.com","age":64,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":33,"firstname":"Niss","lastname":"gawas","email":"gawsa@gmail.com","age":19,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":34,"firstname":"Aman","lastname":"gawas","email":"gawsa@gmail.com","age":25,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":35,"firstname":"Roma","lastname":"gawas","email":"gawsa@gmail.com","age":44,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":36,"firstname":"Lila","lastname":"gawas","email":"gawsa@gmail.com","age":11,"DOB":"21 feb 1997","mobile":"987654321"},
       {"index":37,"firstname":"Kaya","lastname":"gawas","email":"gawsa@gmail.com","age":33,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":38,"firstname":"Sonal","lastname":"gawas","email":"gawsa@gmail.com","age":48,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":39,"firstname":"Nimesh","lastname":"gawas","email":"gawsa@gmail.com","age":66,"DOB":"21 feb 1997","mobile":"987654321"},
      {"index":40,"firstname":"Ayan","lastname":"gawas","email":"gawsa@gmail.com","age":45,"DOB":"21 feb 1997","mobile":"987654321"}
    ];


    function paint(sample) {
    var svg = d3.select('svg');
    svg.selectAll("g").remove();
    
    const margin = 80;
    const width = 1000 - 2 * margin;
    const height = 600 - 2 * margin;

    const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin})`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(sample.map((s) => s.firstname))
      .padding(0.4)
    
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 100]);

    const makeYLines = () => d3.axisLeft()
      .scale(yScale)

    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .call(d3.axisLeft(yScale));

    chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
      )

    const barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.firstname))
      .attr('y', (g) => yScale(g.age))
      .attr('height', (g) => height - yScale(g.age))
      .attr('width', xScale.bandwidth())
      .on('mouseenter', function (actual, i) {
        d3.select(this)
          .attr('opacity', 0.6)
      })
      .on('mouseleave', function () {
        d3.selectAll('.bar')
          .attr('opacity', 1)
      })

    barGroups 
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.firstname) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.age) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.age}`)
    }

      function filterData(event){
        var value = event.value;
        var startVal = (value * 10) - 9;
        var endVal = 10 * value;
        var newData =  sample.filter(data=> data.index > startVal && data.index <= endVal)
        paint(newData)
        document.getElementById('myTable').remove();
        renderTable(newData)
      }

      function loadInitaialData() {
        var newData =  sample.filter(data=> data.index > 0 && data.index <= 10)
        paint(newData)
        renderTable(newData)
      }

      function renderTable (data) {
        var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.getElementById("table-container").appendChild(x);

        var y = document.createElement("TR");
          y.setAttribute("id", "myheader");
          document.getElementById("myTable").appendChild(y);

          for (var property in data[0]) {
            var z = document.createElement("TH");
            var t = document.createTextNode(property);
            z.appendChild(t);
            document.getElementById('myheader').appendChild(z);
          }

        data.map(val => {
          var y = document.createElement("TR");
          y.setAttribute("id", "myTr");
          document.getElementById("myTable").appendChild(y);

          for (var property in val) {
            var z = document.createElement("TD");
            var t = document.createTextNode(val[property]);
            z.appendChild(t);
            y.appendChild(z);
          }
        })
       
      }