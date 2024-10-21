import { Component } from '@angular/core';
import {
  agency,
  baths,
  beds,
  category,
  location,
  propertyStatus,
  propertyType,
  rooms,
} from '../../../../../shared/data/advance-filter';


@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [],
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent {

  public propertyStatus = propertyStatus;
  public propertyType = propertyType;
  public location = location;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;
  public agency = agency;
  public category = category;

}
