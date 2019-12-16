import DataModel from './model';

import './style.scss';

const data = new DataModel();
console.log(data.getAll());
console.log(data.findById(1));
