import { Component } from '@angular/core';
import { users } from '../../../shared/interface/interface';
import { PropertyService } from '../../../shared/services/property.service';
import { CommonUserDetailsComponent } from '../widgets/common-user-details/common-user-details.component';

@Component({
  selector: 'app-all-user',
  standalone: true,
  imports: [CommonUserDetailsComponent],
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent {

  public userData: users[];

  constructor(private propertyService: PropertyService) {
    this.propertyService.getUsers().subscribe(response => {
      this.userData = response;
    })
  }
}
