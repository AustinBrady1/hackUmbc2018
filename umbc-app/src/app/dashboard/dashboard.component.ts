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
    var lift = prompt("Which lift do you want to measure: Squat, Bench, or Deadlift?");
    if (lift != null) {
      while (lift == '') {
        lift = prompt("Enter one of the three aforementioned lifts");
      } if (lift == null) {return;}
      var sex = prompt("Are you a male or a female?");
      if (sex != null) {
        while ((sex != ('Male').toString()) && (sex != ('male').toString()) &&
        (sex != ('Female').toString()) && (sex != ('female').toString())) {
          sex = prompt("Please enter a valid sex");
        } if (sex == null) {return;}
        var weightString = prompt("Please enter your body weight (in lbs)");
        if (weightString != null) {
          while (parseFloat(weightString) < 0 || weightString == '') {
            weightString = prompt("Please enter a valid weight");
          } if (weightString == null) {return;}
          var weight = parseFloat(weightString)/2.2;
          var amountLifted;
          if (lift == ('Squat').toString()) {
            amountLifted = parseFloat(prompt("Please enter your 1rm squat (in lbs)"))/2.2;
          } else if (lift == ('Bench').toString()) {
            amountLifted = parseFloat(prompt("Please enter your 1rm bench (in lbs)"))/2.2;
          } else if (lift == ('Deadlift').toString()) {
            amountLifted = parseFloat(prompt("Please enter your 1rm deadlift (in lbs)"))/2.2;
          }
          var wilksCoefficient, a, b, c, d, e, f;
          if ((sex == 'Female') || (sex == 'female')) {
            a=594.31747775582;
            b=-27.23842536447;
            c=0.82112226871;
            d=-0.00930733913;
            e=0.00004731582;
            f=-0.00000009054;
            wilksCoefficient = 500/(a+(b*weight)+(c*(Math.pow(weight,2)))+
              (d*(Math.pow(weight,3)))+(e*(Math.pow(weight,4)))+(f*(Math.pow(weight,5))));
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
          alert("Your wilks is " + (amountLifted*wilksCoefficient));
        } else {return;}
      } else {return;}
    } else {return;}
  }
}
