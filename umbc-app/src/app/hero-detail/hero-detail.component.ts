import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
declare var CanvasJS: any;

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  template: '<div id="chartContainer" style="height: 370px; width: 100%;"></div>',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.chart();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  wilksCalc() {
    var sex = prompt("Are you a male or a female?");
    if (sex != null) {
      while ((sex != ('Male').toString()) && (sex != ('male').toString()) &&
      (sex != ('Female').toString()) && (sex != ('female').toString())) {
        if (sex == null) {return;}
        else {sex = prompt("Please enter a valid sex");}
      }
      var weightString = prompt("Please enter your weight (in lbs)");
      if (weightString != null) {
        while (parseFloat(weightString) < 0 || weightString == '') {
          weightString = prompt("Please enter a valid weight");
        } if (weightString == null) {return;}
        var weight = parseFloat(weightString)/2.2;
        var squatString = prompt("Please enter your 1rm squat (in lbs)");
        if (squatString != null) {
          while (parseFloat(squatString) < 0 || squatString == '') {
            squatString = prompt("Please enter a valid 1rm squat");
          } if (squatString == null) {return;}
          var squat = parseFloat(squatString)/2.2;
          var benchString = prompt("Please enter your 1rm bench (in lbs)");
          if (benchString != null) {
            while (parseFloat(benchString) < 0 || benchString == '') {
              benchString = prompt("Please enter a valid 1rm bench");
            } if (benchString == null) {return;}
            var bench = parseFloat(benchString)/2.2;
            var deadliftString = prompt("Please enter your 1rm deadlift (in lbs)");
            if (deadliftString != null) {
              while (parseFloat(deadliftString) < 0 || deadliftString == '') {
                deadliftString = prompt("Please enter a valid 1rm deadlift");
              } if (deadliftString == null) {return;}
              var deadlift = parseFloat(deadliftString)/2.2;
              var total = squat+bench+deadlift;
              var wilksCoefficient, a, b, c, d, e, f;
              if ((sex == 'Female') || (sex == 'female')) {
                a=594.31747775582;
                b=-27.23842536447;
                c=0.82112226871;
                d=-0.00930733913;
                e=0.00004731582;
                f=-0.000000009054;
                wilksCoefficient = 500/(a+(b*weight)+(c*(weight^2))+
                  (d*(weight^3))+(e*(weight^4))+(f*(weight^5)));
              }
              else {
                a=-216.0475144;
                b=16.2606339;
                c=-0.002388645;
                d=-0.00113732;
                e=0.00000701863;
                f=-0.00000001291;
                wilksCoefficient = 500/(a+(b*weight)+(c*(Math.pow(weight,2)))+
                  (d*(Math.pow(weight,3)))+(e*(Math.pow(weight,4)))+(f*(Math.pow(weight,5))));
              }
              alert("Your wilks is " + (total*wilksCoefficient));
            } else {return;}
          } else {return;}
        }else {return;}
      } else {return;}
    } else {return;}
  }
  chart() {
    var chart;
    const id = +this.route.snapshot.paramMap.get('id');
    if (id==1) {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true
        ,

      	title:{
      		text:"Raw Squat World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 264.83, label: "Andrzej Stanaszek (639@123)" },
      			{ y: 213.56, label: "Mike Booker (551@132)" },
      			{ y: 195.30, label: "Mike Kuhns (556@148)" },
      			{ y: 201.33, label: "Justin Caputo (622@165)" },
      			{ y: 228.27, label: "Aleksey Nikulin (749@181)" },
      			{ y: 233.07, label: "Amit Sapir (804@198)" },
      			{ y: 226.83, label: "Amit Sapir (821@220)" },
            { y: 222.24, label: "Kevin Oak (832@242)" },
            { y: 226.27, label: "Dennis Cornelius (865@275)" },
            { y: 233.27, label: "Eric Lilliebridge (920@308)"},
            { y: 260.68, label: "Ray Williams (1052@SHW)"}
      		]
      	}]
      });
    } else if (id == 2) {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,

      	title:{
      		text:"Raw Bench World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 162.05, label: "Andrzej Stanaszek (391@123)" },
      			{ y: 164.34, label: "Eric Head (424@132)" },
      			{ y: 154.56, label: "Kristoffer Hulecki (440@148)" },
      			{ y: 157.31, label: "Phillip Brewer (486@165)" },
      			{ y: 169.45, label: "Rick Weil (556@181)" },
      			{ y: 163.79, label: "Larry Danaher (565@198)" },
      			{ y: 160.80, label: "Mike MacDonald (582@220)" },
            { y: 161.07, label: "Mike MacDonald (603@242)" },
            { y: 168.09, label: "Ted Arcidi (650@275)" },
            { y: 168.87, label: "Ted Arcidi (666@308)"},
            { y: 173.81, label: "James Henderson (710@SHW)"}
      		]
      	}]
      });
    }
    else {
      chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,

      	title:{
      		text:"Raw Deadlift World Record",
          horizontalAlign: "center"
      	},
      	axisX:{
      		interval: 1
      	},
      	axisY2:{
      		interlacedColor: "rgba(1,77,101,.2)",
      		gridColor: "rgba(1,77,101,.1)",
      		title: "Wilks Score (weight lifted @ weight class)"
      	},
      	data: [{
      		type: "bar",
      		name: "lifters",
      		axisYType: "secondary",
      		color: "#014D65",
      		dataPoints: [
      			{ y: 262.76, label: "Lamar Gant (634@123)" },
      			{ y: 244.19, label: "Stuart Jamieson (630@132)" },
      			{ y: 245.18, label: "Alexey Sivokon (698@148)" },
      			{ y: 246.00, label: "Dmitriy Nasonov (760@165)" },
      			{ y: 268.50, label: "Dmitriy Nasonov (881@181)" },
      			{ y: 255.39, label: "Cailer Woolam (881@198)" },
      			{ y: 256.11, label: "Cailer Woolam (927@220)" },
            { y: 259.11, label: "Yury Belkin (970@242)" },
            { y: 236.61, label: "Aria Attia (915@275)" },
            { y: 238.09, label: "Konstantin Konstantinovs (939@308)"},
            { y: 249.81, label: "Benedikt Magnusson (1015@SHW)"}
      		]
      	}]
      });
    }
    chart.render();
  }
}
