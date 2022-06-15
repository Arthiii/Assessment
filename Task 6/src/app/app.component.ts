import { Component , OnInit} from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from './file.service';
import {saveAs} from 'file-saver';
import { FileItem } from '@wkoza/ngx-upload';

const uri = 'http://localhost:3000/posts';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers:[FileService]
})
export class AppComponent implements OnInit{

    uploader:FileUploader|any

    attachmentList:any = [];

    constructor(private _fileService:FileService){

        // this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
        //     this.attachmentList.push(JSON.parse(response));
        // }

        
    }

    ngOnInit():void{
        this.uploader = new FileUploader({url:uri,
            allowedMimeType : [ "application/msword",'application/pdf',
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ],
         
           });

           this.uploader.onWhenAddingFileFailed=(FileItem:any)=>{
            alert("Please select pdf or word file");
           }

        //    this.uploader.onAfterAddingFile = (item:any) => {
        //     item.remove();
        //     if (this.uploader.queue.filter((f:any) => f._file.name == item._file.name).length == 0) {
        //     this.uploader.queue.push(item);
        //     } 
        //     else {
        //     alert("Duplicate file, Please select different file");
        //     }
        //     };

        // this.uploader.onAfterAddingFile = (fileItem: FileItem) => {
        //         if (this.uploader.queue.length > 3) {
        //           this.uploader.removeFromQueue(this.uploader.queue[0]);
        //           alert("File should not be more than 3 ");
        //         }
        //       };

        this.uploader.onAfterAddingFile = (item:any,fileItem: FileItem) => {
                item.remove();
                if (this.uploader.queue.filter((f:any) => f._file.name == item._file.name).length == 0) {
                this.uploader.queue.push(item);
                } 
                else {
                alert("Duplicate file, Please select different file");
                }
                if (this.uploader.queue.length > 3) {
                          this.uploader.removeFromQueue(this.uploader.queue[0]);
                          alert("File should not be more than 3 ");
                        }
                };

    }

}