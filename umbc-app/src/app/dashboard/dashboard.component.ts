import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 4));
  }
  wilksCalc() {
    var sex = prompt("Are you a male or a female?");
    if (sex != null) {
      while ((sex != ('Male').toString()) && (sex != ('male').toString()) &&
      (sex != ('Female').toString()) && (sex != ('female').toString())) {
        sex = prompt("Please enter a valid sex");
      }
      var weightString = prompt("Please enter your weight (in lbs)");
      if (weightString != null) {
        while (parseFloat(weightString) < 0) {
          weightString = prompt("Please enter a valid weight");
        }
        var weight = parseFloat(weightString)/2.2;
        var squatString = prompt("Please enter your 1rm squat (in lbs)");
        if (squatString != null) {
          while (parseFloat(squatString) < 0) {
            squatString = prompt("Please enter a valid 1rm squat");
          }
          var squat = parseFloat(squatString)/2.2;
          var benchString = prompt("Please enter your 1rm bench (in lbs)");
          if (benchString != null) {
            while (parseFloat(benchString) < 0) {
              benchString = prompt("Please enter a valid 1rm bench");
            }
            var bench = parseFloat(benchString)/2.2;
            var deadliftString = prompt("Please enter your 1rm deadlift (in lbs)");
            if (deadliftString != null) {
              while (parseFloat(deadliftString) < 0) {
                deadliftString = prompt("Please enter a valid 1rm deadlift");
              }
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
            }
          }
        }
      }
    }
  }
}
