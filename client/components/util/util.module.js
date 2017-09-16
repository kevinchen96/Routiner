'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('routinerApp.util', [])
  .factory('Util', UtilService)
  .name;
