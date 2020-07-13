var vm = new Vue({
  el: "#vue-app",
  data: {
    // Chart Data
    O_posChart: [],
    O_negChart: [],
    A_posChart: [],
    A_negChart: [],
    AB_posChart: [],
    AB_negChart: [],
    B_posChart: [],
    B_negChart: []
    // people: []
  },
  methods: {
    // Chart Configuration
    chart () {
      Highcharts.chart('bloodgroup-data', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Sample Blood Group Chart'
        },
        subtitle: {
          text: 'Source: Firebase Database'
        },
        xAxis: {
          categories: [
            'Age: 1 - 10',
            'Age: 11 - 20',
            'Age: 21 - 30',
            'Age: 31+'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of People'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0">{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'BG O+',
            data: this.O_posChart
          },
          {
            name: 'BG O-',
            data: this.O_negChart
          },
          {
            name: 'BG A+',
            data: this.A_posChart
          },
          {
            name: 'BG A-',
            data: this.A_negChart
          },
          {
            name: 'BG AB+',
            data: this.AB_posChart
          },
          {
            name: 'BG AB-',
            data: this.AB_negChart
          },
          {
            name: 'BG B+',
            data: this.B_posChart
          },
          {
            name: 'BG B-',
            data: this.B_negChart
          }
        ]
      })
    },
    // Chart Bars
    O_PosBar (a, b, c, d) {
      this.O_posChart.push(a.length, b.length, c.length, d.length)
    },
    O_NegBar (a, b, c, d) {
      this.O_negChart.push(a.length, b.length, c.length, d.length)
    },
    A_PosBar (a, b, c, d) {
      this.A_posChart.push(a.length, b.length, c.length, d.length)
    },
    A_NegBar (a, b, c, d) {
      this.A_negChart.push(a.length, b.length, c.length, d.length)
    },
    AB_PosBar (a, b, c, d) {
      this.AB_posChart.push(a.length, b.length, c.length, d.length)
    },
    AB_NegBar (a, b, c, d) {
      this.AB_negChart.push(a.length, b.length, c.length, d.length)
    },
    B_PosBar (a, b, c, d) {
      this.B_posChart.push(a.length, b.length, c.length, d.length)
    },
    B_NegBar (a, b, c, d) {
      this.B_negChart.push(a.length, b.length, c.length, d.length)
    },
    db () {
      var firebaseConfig = {
        apiKey: "AIzaSyDxHx2U7RgcVv2ABHjben7i_d-Rtfc1Tu4",
        authDomain: "e-health-project-ac12d.firebaseapp.com",
        databaseURL: "https://e-health-project-ac12d.firebaseio.com",
        projectId: "e-health-project-ac12d",
        storageBucket: "e-health-project-ac12d.appspot.com",
        messagingSenderId: "757655123983",
        appId: "1:757655123983:web:5f11b416135ac9723d8b7a"
      }
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
      var db = firebase.firestore()
      db.collection('people').get().then((resp) => {
        let localDB = []
        resp.forEach((doc) => {
          localDB.push(doc.data())
          localStorage.setItem('eHealth Database', JSON.stringify(localDB))
        })
        let people = JSON.parse(localStorage.getItem('eHealth Database'))
        // this.people = people

        // Age 1 - 10
        let BG_Opos1 = []; let BG_Oneg1 = []; let BG_Apos1 = []; let BG_Aneg1 = []; let BG_ABpos1 = []; let BG_ABneg1 = []; let BG_Bpos1 = []; let BG_Bneg1 = [];
        // Age 11 - 20
        let BG_Opos2 = []; let BG_Oneg2 = []; let BG_Apos2 = []; let BG_Aneg2 = []; let BG_ABpos2 = []; let BG_ABneg2 = []; let BG_Bpos2 = []; let BG_Bneg2 = [];

        // Age 21 - 30
        let BG_Opos3 = []; let BG_Oneg3 = []; let BG_Apos3 = []; let BG_Aneg3 = []; let BG_ABpos3 = []; let BG_ABneg3 = []; let BG_Bpos3 = []; let BG_Bneg3 = [];

        // Age 30 and above
        let BG_Opos4 = []; let BG_Oneg4 = []; let BG_Apos4 = []; let BG_Aneg4 = []; let BG_ABpos4 = []; let BG_ABneg4 = []; let BG_Bpos4 = []; let BG_Bneg4 = [];

        checkBG1 = (BG) => {
          (BG === 'O+') ? BG_Opos1.push(BG) :
          (BG === 'O-') ? BG_Oneg1.push(BG) :
          (BG === 'A+') ? BG_Apos1.push(BG) :
          (BG === 'A-') ? BG_Aneg1.push(BG) :
          (BG === 'AB+') ? BG_ABpos1.push(BG) :
          (BG === 'AB-') ? BG_ABneg1.push(BG) :
          (BG === 'B+') ? BG_Bpos1.push(BG) :
          (BG === 'B-') ? BG_Bneg1.push(BG) : ''
        }
        checkBG2 = (BG) => {
          (BG === 'O+') ? BG_Opos2.push(BG) :
          (BG === 'O-') ? BG_Oneg2.push(BG) :
          (BG === 'A+') ? BG_Apos2.push(BG) :
          (BG === 'A-') ? BG_Aneg2.push(BG) :
          (BG === 'AB+') ? BG_ABpos2.push(BG) :
          (BG === 'AB-') ? BG_ABneg2.push(BG) :
          (BG === 'B+') ? BG_Bpos2.push(BG) :
          (BG === 'B-') ? BG_Bneg2.push(BG) : ''
        }
        checkBG3 = (BG) => {
          (BG === 'O+') ? BG_Opos3.push(BG) :
          (BG === 'O-') ? BG_Oneg3.push(BG) :
          (BG === 'A+') ? BG_Apos3.push(BG) :
          (BG === 'A-') ? BG_Aneg3.push(BG) :
          (BG === 'AB+') ? BG_ABpos3.push(BG) :
          (BG === 'AB-') ? BG_ABneg3.push(BG) :
          (BG === 'B+') ? BG_Bpos3.push(BG) :
          (BG === 'B-') ? BG_Bneg3.push(BG) : ''
        }
        checkBG4 = (BG) => {
          (BG === 'O+') ? BG_Opos4.push(BG) :
          (BG === 'O-') ? BG_Oneg4.push(BG) :
          (BG === 'A+') ? BG_Apos4.push(BG) :
          (BG === 'A-') ? BG_Aneg4.push(BG) :
          (BG === 'AB+') ? BG_ABpos4.push(BG) :
          (BG === 'AB-') ? BG_ABneg4.push(BG) :
          (BG === 'B+') ? BG_Bpos4.push(BG) :
          (BG === 'B-') ? BG_Bneg4.push(BG) : ''
        }

        // Sort Persons By Age
        people.find(person => {
          (person.age <= 10) ? checkBG1(person.bloodGroup) :
          (person.age > 10 && person.age <= 20) ? checkBG2(person.bloodGroup) :
          (person.age > 20 && person.age <= 30) ? checkBG3(person.bloodGroup) :
          (person.age > 30) ? checkBG4(person.bloodGroup) : ''
        })
        
        this.O_PosBar(BG_Opos1, BG_Opos2, BG_Opos3, BG_Opos4)
        this.O_NegBar(BG_Oneg1, BG_Oneg2, BG_Oneg3, BG_Oneg4)
        this.A_PosBar(BG_Apos1, BG_Apos2, BG_Apos3, BG_Apos4)
        this.A_NegBar(BG_Aneg1, BG_Aneg2, BG_Aneg3, BG_Aneg4)
        this.AB_PosBar(BG_ABpos1, BG_ABpos2, BG_ABpos3, BG_ABpos4)
        this.AB_NegBar(BG_ABneg1, BG_ABneg2, BG_ABneg3, BG_ABneg4)
        this.B_PosBar(BG_Bpos1, BG_Bpos2, BG_Bpos3, BG_Bpos4)
        this.B_NegBar(BG_Bneg1, BG_Bneg2, BG_Bneg3, BG_Bneg4)

        this.chart()
      })
    }
  },
  mounted () {
    this.db()
  }
})
   