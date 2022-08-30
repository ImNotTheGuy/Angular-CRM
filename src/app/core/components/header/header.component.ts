import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  version!: any;

  constructor(private versionService: VersionService) {
    this.versionService.behaviorSubject.subscribe((data) => {
      this.version = data;
    });
  }

  ngOnInit(): void {
  }

}
