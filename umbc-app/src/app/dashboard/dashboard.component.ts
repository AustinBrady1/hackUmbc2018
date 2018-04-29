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
  // wilksCalc() {
  //   alert("hello");
  //   var sex = prompt("Are you a male or a female?");
  //   if (sex != null) {
  //     while (sex != "Male" || sex != "male" || sex != "Female" || sex != "female") {
  //       sex = prompt("Please enter a valid sex");
  //     }
  //     var weight = prompt("Please enter your weight (in lbs)");
  //     if (weight != null) {
  //       while (weight < 0) {
  //         weight = prompt("Please enter a valid weight");
  //       }
  //       weight = parseFloat(weight)/2.2;
  //       var wilks, a, b, c, d, e, f;
  //       if (sex === "Female" || sex === "female") {
  //         a=594.31747775582;
  //         b=-27.23842536447;
  //         c=0.82112226871;
  //         d=-0.00930733913;
  //         e=4.731582*(10^-5);
  //         f=-9.054*(10^-8);
  //         wilks = 500/(a+(b*weight)+(c*(weight^2))+
  //           (d*(weight^3))+(e*(weight^4))+(f*(weight^5)));
  //       }
  //       else {
  //         a=-216.0475144;
  //         b=16.2606339;
  //         c=-0.002388645;
  //         d=-0.00113732;
  //         e=7.01863*(10^-6);
  //         f=-1.291*(10^-8);
  //         wilks = 500/(a+(b*weight)+(c*(weight^2))+
  //           (d*(weight^3))+(e*(weight^4))+(f*(weight^5)));
  //       }
  //       alert("Your wilks is " + wilks);
  //     }
  //   }
  // }
}
