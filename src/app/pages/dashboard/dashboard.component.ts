import { Component, OnInit } from '@angular/core';
import { QualityService } from '../../services/quality/quality.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public qualityData: any;

  constructor(private qualityService: QualityService) {
  }

  ngOnInit(): void {
    this.qualityService.getQualities().subscribe(res => {
      this.qualityData = res;
    });
  }
}
