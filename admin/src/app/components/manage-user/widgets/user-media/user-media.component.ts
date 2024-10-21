import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-media',
  standalone: true,
  imports: [DropzoneModule],
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.scss']
})
export class UserMediaComponent {

  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 3;
  public text = '<i class="fas fa-cloud-upload-alt"></i><h6 class="f-w-700 mb-0">Drop files here or click to upload.</h6>';

  constructor(private toast: ToastrService) { }

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  submit() {
      Swal.fire({
        title: 'Are you sure you want to submit the form?',
        text: 'please check account details',
        icon: 'success',
        confirmButtonText: 'submit',
        confirmButtonColor: '#e64942',
        showCancelButton: true,
        cancelButtonColor: '#efefef',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            window.location.reload();
          }, 3000);

          this.toast.success('Your Account created successfully.', '', {
            timeOut: 3000,
          });
        }
      });
    }
}
