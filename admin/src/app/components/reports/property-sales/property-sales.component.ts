import { Component } from '@angular/core';
import { propertySalesData } from '../../../shared/data/data/reports/reports';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-property-sales',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './property-sales.component.html',
  styleUrls: ['./property-sales.component.scss']
})
export class PropertySalesComponent {

  public propertySales = propertySalesData;

}
