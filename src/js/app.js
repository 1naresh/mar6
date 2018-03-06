import '../css/style.css';
import 'angular';
import 'angular-ui-router';
import { config } from './config'
import dataService from './services/dataService'
angular.module('app',['ui.router'])
.service('dataService',dataService)
.config(config)



       