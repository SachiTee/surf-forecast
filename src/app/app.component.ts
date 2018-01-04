import { Component } from '@angular/core';

@Component({
  selector: 'srf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'srf-app';
}

/*

angular.module('rlsFilter').service('sampleData', function() {
    function getFakeData() {
        return new Promise(function (resolve, reject) {
            return resolve(data);
        });
    }
});*/
