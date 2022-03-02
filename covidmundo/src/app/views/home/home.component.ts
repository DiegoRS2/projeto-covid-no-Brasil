import { Covid } from './../../services/covid.model';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  covid!: Covid[];
  displayedColumns = ['uf', 'state', 'cases', 'deaths', 'suspects', 'refuses', 'date'];

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.read().subscribe(covid => {
      this.covid = covid.data
      console.log(this.covid)
    });

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Paraná', 'Rio Grande do Sul', 'Bahia'],
        datasets: [{
          label: 'Ranking dos seis estados com maior número de mortes',
          data: [164532, 59645, 71778, 42307, 38272, 29181],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
