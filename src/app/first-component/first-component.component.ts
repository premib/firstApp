import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Input('title') title;
  obj= {
    name: "",
    price: 0,
    True: [],
    False: []
  }
  content = [
      {
        name: "FREE",
        price: 0,
        True:[
          "Single User",
          "5GB Storage",
          "Unlimited Public Projects",
          "Community Access"
        ],
        False:[
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "Monthly Status Reports"
        ]
      },
      {
        name: "PLUS",
        price: 9,
        True:[
          "5 Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain"
        ],
        False:[
          "Monthly Status Reports"
        ]
      },
      {
        name: "PRO",
        price: 49,
        True:[
          "Unlimited Users",
          "150GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Community Access",
          "Dedicated Phone Support",
          "Unlimited Free Subdomains",
          "Monthly Status Reports"
        ],
        False:[]
      }
  ]
  lol= ""

  constructor() { }

  ngOnInit(): void {
    console.log(this.title);

    this.content.forEach(element=>{
      if(!element.name.localeCompare(this.title)){

        this.obj= element;
        console.log(this.obj)
        return;
      }
    })

  }

}
