import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version!: any;

  constructor(private versionService: VersionService) {
    this.versionService.behaviorSubject.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {
  }

}
